import classNames from "classnames";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={classNames(
        "mx-auto lg:mx-0 uppercase hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
