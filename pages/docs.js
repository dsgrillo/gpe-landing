import Waves from "../src/components/waves";

function Sidebar() {
  return (
    <ul className="flex flex-col py-4">
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-home"></i>
          </span>
          <span className="text-sm font-medium">Dashboard</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-music"></i>
          </span>
          <span className="text-sm font-medium">Music</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-drink"></i>
          </span>
          <span className="text-sm font-medium">Drink</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-shopping-bag"></i>
          </span>
          <span className="text-sm font-medium">Shopping</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-chat"></i>
          </span>
          <span className="text-sm font-medium">Chat</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-user"></i>
          </span>
          <span className="text-sm font-medium">Profile</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-bell"></i>
          </span>
          <span className="text-sm font-medium">Notifications</span>
          <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
            5
          </span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <i className="bx bx-log-out"></i>
          </span>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </li>
    </ul>
  );
}

export default function Docs() {
  return (
    <>
      {/*<div className="flex flex-row bg-gray-100">*/}
      {/*  <div className="flex flex-col w-96 bg-white rounded-r-3xl overflow-hidden">*/}
      {/*    <Sidebar />*/}
      {/*  </div>*/}
      {/*  <div className={"flex flex-col text-black"}>*/}
      {/*    <h3>*/}
      {/*      <strong>TERMOS E CONDIÇÕES GERAIS DE USO</strong>*/}
      {/*    </h3>*/}
      {/*    <p>*/}
      {/*      <strong>*</strong>, pessoa jurídica de direito privado, inscrita no*/}
      {/*      CNPJ sob n. *, com sede na *, desenvolvedora da plataforma{" "}*/}
      {/*      <strong>GPE Pesquisa</strong>, denominado{" "}*/}
      {/*      <strong>&quot;LICENCIANTE&quot;</strong> por meio deste Contrato de*/}
      {/*      Acordo para Licença de Usuário Final ou{" "}*/}
      {/*      <strong>TERMOS E CONDIÇÕES GERAIS DE USO</strong> entre o licenciado*/}
      {/*      (pessoa física ou jurídica) denominado apenas como*/}
      {/*      <strong>&quot;LICENCIADO&quot;</strong>.*/}
      {/*    </p>*/}
      {/*    <p>&nbsp;</p>*/}
      {/*    <ol>*/}
      {/*      <li>*/}
      {/*        <h4>*/}
      {/*          <strong> Do Objeto</strong>*/}
      {/*        </h4>*/}
      {/*      </li>*/}
      {/*    </ol>*/}
      {/*    <p>&nbsp;</p>*/}
      {/*    <p>*/}
      {/*      A <strong>LICENCIANTE</strong> fornece por tempo indeterminado*/}
      {/*      mediante a pagamento mensal de{" "}*/}
      {/*      <strong>*/}
      {/*        <u>acordo com a proposta comercial apresentada</u>*/}
      {/*      </strong>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}
