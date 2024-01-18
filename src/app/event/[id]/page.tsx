import * as api from '@/api/site';
import { Search } from '@/componentes/site/Search';
import { redirect } from 'next/navigation';

type Props = {
    params: {
        id: string;
    }
}
export const Page = async ({ params }: Props) => {

    const eventItem = await api.getEvent(parseInt(params.id));
    if(!eventItem || !eventItem.status) return redirect('/');

    return(
        <main className="text-center mx-auto max-w-lg p-5">
            <header>
                <h2 className="text-yellow-400 text-2xl">Amigo Secreto</h2>
                <h1 className="text-3xl mb-2 mt-5">{ eventItem.title }</h1>
                <p className="text-sm mb-5">{ eventItem.description }</p>
            </header>

            <Search id={eventItem.id} />

            <footer className="text-sm-2">Rodapé</footer>
        </main>
    )
}
export default Page;