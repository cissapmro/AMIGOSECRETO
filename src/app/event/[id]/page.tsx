type Props = {
    params: {
        id: string;
    }
}
export const Page = ({ params }: Props) => {
    return(
        <main className="text-center mx-auto max-w-lg p-5">
            <header>
                <h2 className="text-yellow-400 text-2xl">Amigo Secreto</h2>
                <h1 className="text-3xl mb-2 mt-5">Título do Evento</h1>
                <p className="text-sm mb-5">*** Descrição do Evento ***</p>
            </header>

            ...

            <footer>Cissa</footer>
        </main>
    )
}
export default Page;