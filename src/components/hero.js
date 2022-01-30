import Button from "./button";
import Image from "next/image";
import hero from "../../public/hero.png";
import Link from "next/link";
import Waves from "./waves";

export default function Hero() {
  return (
    <div className="">
      <div className="container px-3 mx-auto text-center flex-wrap flex-col md:flex-row items-center">
        {/*!--Left Col-->*/}
        <div className="w-2/3 justify-center mx-auto text-center">
          {/*<p className="uppercase tracking-loose w-full">What business are you?</p>*/}
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Crie questionários, colete entrevistas e visualize resultados com
            dashboards personalizados.
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Transformamos a forma de fazer pesquisa a partir da automatização de
            processos manuais e repetitivos. E não só isso...
          </p>
          <Link href={"/#contato"}>
            <Button className={"my-6"}>Comece agora o seu trial!</Button>
          </Link>
        </div>
        {/*!--Right Col-->*/}
        <div className="w-5/6 py-6 text-center mx-auto">
          <Image alt={"Hero"} className="w-full z-50 z-0" src={hero} />
        </div>
      </div>

      {/*<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">*/}
      {/*  /!*!--Left Col-->*!/*/}
      {/*  <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">*/}
      {/*    /!*<p className="uppercase tracking-loose w-full">What business are you?</p>*!/*/}
      {/*    <h1 className="my-4 text-5xl font-bold leading-tight">*/}
      {/*      Crie questionários, colete entrevistas e visualize resultados com*/}
      {/*      dashboards personalizados.*/}
      {/*    </h1>*/}
      {/*    <p className="leading-normal text-2xl mb-8">*/}
      {/*      Transformamos a forma de fazer pesquisa a partir da automatização de*/}
      {/*      processos manuais e repetitivos. E não só isso...*/}
      {/*    </p>*/}
      {/*    <Link href={"/#contato"}>*/}
      {/*      <Button>Comece agora o seu trial!</Button>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*  /!*!--Right Col-->*!/*/}
      {/*  <div className="w-full md:w-2/5 py-6 text-center">*/}
      {/*    <Image alt={"Hero"} className="w-full md:w-4/5 z-50 z-0" src={hero} />*/}
      {/*  </div>*/}
      {/*</div>*/}

      <Waves />
    </div>
  );
}
