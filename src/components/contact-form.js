import Button from "./button";

export default function ContactForm() {
    return (
        <section className="container mx-auto text-center py-6 mb-12">
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
                <div>
                    <Label>Nome completo</Label>
                    <Input />
                </div>
                <div className="mt-8">
                    <Label>Email</Label>
                    <Input />
                </div>
                <div className="mt-8">
                    <Label>Mensagem</Label>
                    <textarea
                        className="w-full h-32 bg-gray-50 text-gray-700 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mt-8">
                    <Button className={"uppercase"}>
                        Enviar mensagem
                    </Button>
                </div>
            </div>

        </section>
    )
}

function Label({children}) {
    return (
        <span className="uppercase text-sm font-bold">{children}</span>
    )
}

function Input() {
    return (
        <input
            className="w-full bg-gray-50 text-gray-700 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" />
    )
}
