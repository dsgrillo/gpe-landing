import Hero from "../src/components/hero";
import appHome from "../public/app_home.png";
import questionariosSemComplicacoes from "../public/crie-questionarios-sem-complicacoes.jpg";
import relatoriosTabelas from "../public/relatorios-tabelas.svg";
import ContactForm from "../src/components/contact-form";
import Image from "next/image";
import Link from "next/link";

function Feature({ img, title, text, position }) {
  return (
    <div className="flex flex-wrap flex-col-reverse sm:flex-row ">
      {position === "left" && (
        <div className="w-full sm:w-1/2 p-6 mt-6 items-center flex">
          {img && <Image src={img} alt={text} />}
        </div>
      )}
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <div className="align-middle">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-8">{text}</p>
        </div>
      </div>
      {position === "right" && (
        <div className="w-full sm:w-1/2 p-6 mt-6 items-center flex">
          {img && <Image src={img} alt={text} />}
        </div>
      )}
    </div>
  );
}

function Box({ title, body, img }) {
  return (
    <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
      <div className="max-w-sm rounded overflow-hidden shadow hover:bg-gray-100">
        <div className="px-6 py-4 text-center font-bold text-xl mb-2 text-gray-800 hover:scale-105 duration-300">
          {title}
        </div>

        <Image className="w-full" src={img} alt="Mountain" />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        {/*<div className="px-6 pt-4 pb-2">*/}
        {/*  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
        {/*    #photography*/}
        {/*  </span>*/}
        {/*  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
        {/*    #travel*/}
        {/*  </span>*/}
        {/*  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
        {/*    #winter*/}
        {/*  </span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <div id={"como-funciona"} className={"bg-white pb-3"}></div>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Como funciona?
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <Feature
            position={"right"}
            title={"Crie questionários sem complicações"}
            img={questionariosSemComplicacoes}
            text={
              <>
                <br />
                <p className={""}>
                  Com o editor de perguntas da GPE Pesquisa é muito fácil de
                  criar, editar e personalizar questionários. Os indicadores de
                  quantidade de entrevistas e data de início e fim são recursos
                  para te ajudar a monitar melhor sua pesquisa.
                </p>

                <p className={"mt-8"}>
                  Além disso é possível marcar perguntas estratégicas para
                  acompanhamento de campo. E se você quiser, é possivel criar um
                  template de questionários para manter um padrão e deixar seu
                  trabalho ainda mais ágil.
                </p>

                <div className={"flex mt-8"}>
                  <ul className={"flex-1 list-disc"}>
                    <li>Simples escolha</li>
                    <li>Múltipla escolha</li>
                    <li>Texto escrito</li>
                    <li>Salto</li>
                  </ul>
                  <ul className={"flex-1 list-disc"}>
                    <li>Quantidade de entrevistas</li>
                    <li>Data de início e fim</li>
                    <li>Pergunta estratégica</li>
                    <li>Crie templates</li>
                  </ul>
                </div>
              </>
            }
          />
          <Feature
            position={"left"}
            img={appHome}
            title={"Entreviste com o aplicativo GPE Pesquisa"}
            text={
              <>
                O aplicativo mobile da GPE Pesquisa é disponível gratuitamente
                no Google Play, é só fazer o download e começar a usar. Não
                precisa configurar nada!
                <br />
                <br />
                Tudo que você precisa para fazer entrevistas de um modo fácil e
                eficiente.
                <br />
                <ul className={"list-disc mt-8"}>
                  <li>Sincronização segura de questionários e respostas</li>
                  <li>Possibilidade de ter mais de questionário</li>
                  <li>Login individual</li>
                  <li>Visualização de parciais das perguntas estratégicas</li>
                  <li>Atualização automática</li>
                </ul>
              </>
            }
          />
          <Feature
            position={"right"}
            title={"Relatórios, tabelas e gráficos em poucos cliques"}
            img={relatoriosTabelas}
            text={
              <>
                <br />
                <p className={""}>
                  Fazer relatórios nunca foi tão simples. Com a GPE Pesquisa
                  você consegue visualizar os resultados da sua pesquisa assim
                  que receber suas respostas e fazer seu download nos formatos
                  Word e Excel.
                  <br /> <br />
                  Você não precisa mais se preocupar em construir tabelas e
                  gráficos, a nossa plataforma faz todo esse trabalho pesado pra
                  você.
                </p>

                <ul className={"mt-6 list-disc"}>
                  <li>
                    Tabelas de frequência e porcentagem e gráficos de barras
                    para todas as perguntas do seu questionário.
                  </li>
                  <li>
                    Gráficos em pilha com tabela em porcentagens. Ideal para
                    fazer análises comparativas.
                  </li>
                  <li>Tabelas cruzadas.</li>
                </ul>
              </>
            }
          />
          <Feature
            position={"left"}
            title={"Melhore o trabalho em campo"}
            img={questionariosSemComplicacoes}
            text={
              <>
                <br />
                <p className={""}>
                  Fazer relatórios nunca foi tão simples. Com a GPE Pesquisa
                  você consegue visualizar os resultados da sua pesquisa assim
                  que receber suas respostas e fazer seu download nos formatos
                  Word e Excel.
                  <br /> <br />
                  Você não precisa mais se preocupar em construir tabelas e
                  gráficos, a nossa plataforma faz todo esse trabalho pesado pra
                  você.
                </p>

                <ul className={"mt-6 list-disc"}>
                  <li>
                    Tabelas de frequência e porcentagem e gráficos de barras
                    para todas as perguntas do seu questionário.
                  </li>
                  <li>
                    Gráficos em pilha com tabela em porcentagens. Ideal para
                    fazer análises comparativas.
                  </li>
                  <li>Tabelas cruzadas.</li>
                </ul>
              </>
            }
          />
        </div>
      </section>
      <section className="bg-white border-b pt-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Fazer pesquisa nunca foi tão fácil
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          {/*<Box*/}
          {/*  title={"Crie seu questionário"}*/}
          {/*  img={questionariosSemComplicacoes}*/}
          {/*/>*/}
          {/*<Box*/}
          {/*  title={"Colete entrevistas"}*/}
          {/*  img={questionariosSemComplicacoes}*/}
          {/*/>*/}

          {/*<Box title={"Monitore o campo"} img={questionariosSemComplicacoes} />*/}

          {/*<Box*/}
          {/*  title={"Gere os relatórios"}*/}
          {/*  img={questionariosSemComplicacoes}*/}
          {/*/>*/}
          {/*<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">*/}
          {/*  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">*/}
          {/*    <span className="flex flex-wrap no-underline hover:no-underline">*/}
          {/*      <p className="w-full text-gray-600 text-xs md:text-sm px-6">*/}
          {/*        xGETTING STARTED*/}
          {/*      </p>*/}
          {/*      <div className="w-full font-bold text-xl text-gray-800 px-6">*/}
          {/*        Lorem ipsum dolor sit amet.*/}
          {/*      </div>*/}
          {/*      <p className="text-gray-800 text-base px-6 mb-5">*/}
          {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
          {/*        Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.*/}
          {/*      </p>*/}
          {/*    </span>*/}
          {/*  </div>*/}
          {/*  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">*/}
          {/*    <div className="flex items-center justify-center">*/}
          {/*      <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">*/}
          {/*        Action*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">*/}
          {/*  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">*/}
          {/*    <span className="flex flex-wrap no-underline hover:no-underline">*/}
          {/*      <p className="w-full text-gray-600 text-xs md:text-sm px-6">*/}
          {/*        xGETTING STARTED*/}
          {/*      </p>*/}
          {/*      <div className="w-full font-bold text-xl text-gray-800 px-6">*/}
          {/*        Lorem ipsum dolor sit amet.*/}
          {/*      </div>*/}
          {/*      <p className="text-gray-800 text-base px-6 mb-5">*/}
          {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
          {/*        Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.*/}
          {/*      </p>*/}
          {/*    </span>*/}
          {/*  </div>*/}
          {/*  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">*/}
          {/*    <div className="flex items-center justify-end">*/}
          {/*      <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">*/}
          {/*        Action*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/GL7LQUUBEkU"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
      <div id={"preco"} className={"bg-gray-100 pb-3"}></div>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Preço
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center">
                  Plano Básico
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul className="w-full text-center text-base font-bold">
                  <li className="border-b py-4">
                    Acesso a todas as funcionalidades
                  </li>
                  <li className="border-b py-4">Dispositivos Ilimitados</li>
                  <li className="border-b py-4">Questionários Ilimitados</li>
                  <li className="border-b py-4">
                    Pague apenas por entrevista feita
                  </li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-4xl font-bold text-center">
                  R$ 99,00
                  <span className="text-base text-gray-500"> / mês</span>
                </div>
                <div className="w-full text-blue-800 text-4xl font-bold text-center">
                  +
                </div>
                <div className="w-full text-4xl font-bold text-center">
                  R$ 0,15
                  <span className="text-base text-gray-500">
                    {" "}
                    / por entrevista
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <Link href={"/#contato"}>
                    <a className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Assinar plano
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*!-- Change the colour #f8fafc to match the previous section colour -->*/}
      <svg
        className="wave-top -mb-8"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#f3f4f6">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div id={"contato"} className={"mb-9"}></div>
      <ContactForm />
    </>
  );
}

//
// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
//         <h1 className="text-6xl font-bold">
//           Welcome to{' '}
//           <a className="text-blue-600" href="https://nextjs.org">
//             Next.js!
//           </a>
//         </h1>
//
//         <p className="mt-3 text-2xl">
//           Get started by editing{' '}
//           <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
//             pages/index.js
//           </code>
//         </p>
//
//         <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
//           <a
//             href="https://nextjs.org/docs"
//             className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Find in-depth information about Next.js features and API.
//             </p>
//           </a>
//
//           <a
//             href="https://nextjs.org/learn"
//             className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Learn &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Learn about Next.js in an interactive course with quizzes!
//             </p>
//           </a>
//
//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Examples &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Discover and deploy boilerplate example Next.js projects.
//             </p>
//           </a>
//
//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//
//       <footer className="flex items-center justify-center w-full h-24 border-t">
//         <a
//           className="flex items-center justify-center"
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
//         </a>
//       </footer>
//     </div>
//   )
// }
