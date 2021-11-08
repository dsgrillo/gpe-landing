import Hero from "../src/components/hero";
import Image from "next/image";
import Waves from "../src/components/waves";

export default function TiposDeGraficosRelatorios() {
  return (
    <>
      <h1 className="w-full mt-2 mb-6 text-5xl font-bold leading-tight text-center">
        Tipos de gráficos e relatórios
      </h1>
      <Waves />

      <section className=" bg-white border-b py-8 text-black">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          {[
            "Tabelas e gráficos de frequência",
            "Resultados comparativos",
            "Tabelas cruzadas",
          ].map((title, i) => (
            <div className="flex flex-wrap flex-col sm:flex-row ">
              {i % 2 === 0 && (
                <div className="w-full sm:w-1/2 p-6 mt-6 items-center flex">
                  <img src={"https://via.placeholder.com/600x300.png"} />
                </div>
              )}
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vitae ex ut mi tristique sodales. Pellentesque et
                    venenatis velit, eget iaculis lectus. Quisque consectetur
                    lorem ut lobortis blandit.
                  </p>
                  <p className={"text-gray-600 mb-8"}>
                    Duis lobortis accumsan iaculis. Cras congue urna at maximus
                    tincidunt. Fusce a placerat neque. Vestibulum nec lectus
                    egestas, condimentum quam quis, egestas orci.
                  </p>
                </div>
              </div>
              {i % 2 === 1 && (
                <div className="w-full sm:w-1/2 p-6 mt-6 items-center flex">
                  <img src={"https://via.placeholder.com/600x300.png"} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
