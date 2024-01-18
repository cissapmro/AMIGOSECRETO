import { req } from '@/api/axios';
import { Event } from '@/types/Events';
import { SearchResult } from '@/types/SearchResult';

export const getEvent = async (id: number):Promise<Event | false> => {
    const json = await req.get(`events/${id}`);
    return json.data.event ?? false;
}
//Buscar pelo id e pelo cpf
export const searchCpf = async (idEvent: number, cpf: string): Promise<SearchResult | false> => {
    const json = await req.get(`events/${idEvent}/search?cpf=${cpf}`);
   if(json.data.person && json.data.personMatched) {
    return json.data as SearchResult
   }
   return false;
}