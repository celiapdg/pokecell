import { useState, useEffect, useCallback } from "react";
import { getChains } from "../helpers/getEvolutionChain";
import { pokemonAPI } from "../api/pokemonAPI";
import { parseIdFromUrl } from "../helpers";


export const useFetchEvolutions = (id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [res, setRes] = useState([]);
    const [chains, setChains] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const { data } = await pokemonAPI.get('/evolution-chain/' + id);

            let tempChains = getChains(data.chain);

            if (!!tempChains[0].species?.name) tempChains = [tempChains];;

            await Promise.all(tempChains.map((chain) => {
                return Promise.all(chain.map((taxon) => {
                    //console.log(`${baseURL}/pokemon/${pokemon.name}`)
                    return pokemonAPI.get('/pokemon/' + parseIdFromUrl(taxon.species.url));
                })).then(function (data) {
                    return data
                })
            })).then(function (data) {
                setRes(data)
                setChains(tempChains)
                setLoading(false);
                return data
            })

        } catch (err) {
            console.log(err);
            setError(err);
        }
    }, [id]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, id]);

    return { loading, error, res, chains };
}