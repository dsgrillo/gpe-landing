import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import remark from "remark";
import html from "remark-html";
import { getAllPosts, getPostBySlug } from "../../src/api";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <article className="mb-32">
            <div className="container mx-auto bg-white text-black rounded-xl p-8">
              <div className={"markdown-body"}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = post.content || ""; //await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
