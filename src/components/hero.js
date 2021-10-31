import Button from "./button";
import Image from "next/image";
import hero from "../../public/hero.png";

export default function Hero() {
  return (
    <div className="">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/*!--Left Col-->*/}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          {/*<p className="uppercase tracking-loose w-full">What business are you?</p>*/}
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Se você tem uma pergunta nós te ajudamos a obter as respostas.
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Conheça o novo jeito de fazer pesquisa.
          </p>
          <Button onClick={() => console.log("comece agora")}>
            Comece agora o seu trial!
          </Button>
        </div>
        {/*!--Right Col-->*/}
        <div className="w-full md:w-3/5 py-6 text-center">
          <Image alt={"Hero"} className="w-full md:w-4/5 z-50 z-0" src={hero} />
        </div>
      </div>
    </div>
  );
}
