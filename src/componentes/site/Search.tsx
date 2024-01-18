"use client"

import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchReveal from "./SearchReveal";
import { SearchResult } from "@/types/SearchResult";

type Props = {
    id: number;
}

export const Search = ({ id }: Props) => {

    const [results, setResults] = useState<SearchResult>();

    const handleSearchButton = async (cpf: string) => {

    }

    return(
        <section>
            <div className="bg-gray-900 p-5 rounded">
               {!results && <SearchForm onSearchButton={handleSearchButton} />}
               {/*results && <SearchReveal results={results} />*/}
            </div>
        </section>
    )
}
export default Search;