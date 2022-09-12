import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getChains } from "../helpers/getEvolutionChain";

const baseURL = 'https://pokeapi.co/api/v2'

export const useFetchEvolutions = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [res, setRes] = useState([]);
    const [chains, setChains] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const { data } = await axios.get(url);

            let tempChains = getChains(data.chain);

            if (!!tempChains[0].species?.name) tempChains = [tempChains];;

            await Promise.all(tempChains.map((chain) => {
                return Promise.all(chain.map((taxon) => {
                    //console.log(`${baseURL}/pokemon/${pokemon.name}`)
                    return axios.get(`${taxon.species.url.replace('-species', '')}`);
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
    }, [url]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, url]);

    return { loading, error, res, chains };
}