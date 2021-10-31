import Button from "./button";
import { useState } from "react";
import axios from "axios";
import classNames from "classnames";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  return (
    <section
      className="container mx-auto text-center py-6 mb-12"
      id={"contato"}
    >
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        O que você está esperando para fazer pesquisa fácil assim?
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Faça seu período de prova sem compromisso
      </h3>
      <div className="lg:w-6/12 xs:w-10/12 m-auto bg-white bg-opacity-10 rounded-2xl p-6">
        {success ? (
          <div>
            <h3 className={"text-2xl mb-3"}>Recebemos a sua mensagem!</h3>
            <h2>
              Em breve entraremos em contato com você e te daremos as suas
              credenciais de acesso ao sistema.
            </h2>
          </div>
        ) : (
          <Form setSuccess={setSuccess} />
        )}
      </div>
    </section>
  );
}

function Form({ setSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  return (
    <>
      <div>
        <Label>Nome completo</Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={errors["name"]}
        />
      </div>
      <div className="mt-8">
        <Label>Email</Label>
        <Input
          required
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={errors["email"]}
        />
      </div>
      <div className="mt-8">
        <Label>Mensagem</Label>
        <textarea
          required
          onChange={(e) => setMessage(e.target.value)}
          className={classNames({
            "w-full h-32 bg-gray-50 text-gray-700 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2": true,
            "border-red-700": !!errors["msg"],
          })}
          value={message}
        ></textarea>
        {errors["msg"] ? <span className={""}>{errors["msg"]}</span> : null}
      </div>
      <div className="mt-8">
        <Button
          onClick={async () => {
            console.log("sendingMessage");
            if (loading) return;
            setLoading(true);
            try {
              await axios.post(
                "https://www.criarenquete.com.br/api/sendMessage",
                {
                  name,
                  email,
                  subject: "GPE",
                  msg: message,
                }
              );
              setSuccess(true);
            } catch (e) {
              if (e.response) {
                setErrors(e.response.data.errors);
              }
            } finally {
              setLoading(false);
            }
          }}
          className={"uppercase"}
        >
          Enviar mensagem
        </Button>
      </div>
    </>
  );
}

function Label({ children }) {
  return <span className="uppercase text-sm font-bold">{children}</span>;
}

function Input({ error, ...props }) {
  return (
    <div>
      <input
        className={classNames({
          "w-full bg-gray-50 text-gray-700 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border-2": true,
          "border-red-700": !!error,
        })}
        type="text"
        {...props}
      />
      {error ? <span className={""}>{error}</span> : null}
    </div>
  );
}
