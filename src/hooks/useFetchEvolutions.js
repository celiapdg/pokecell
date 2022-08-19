import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getChains } from "../helpers/getEvolutionChain";
import { getPokemon } from "../helpers/getPokemonData";

const baseURL = 'https://pokeapi.co/api/v2'

export const useFetchEvolutions = (url, d) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [res, setRes] = useState([]);
    const [chains, setChains] = useState([]);


    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const { data } = await axios.get(url);

            await setChains(await getChains(data.chain));
            await console.log('1', chains)

            // if (!!tempChains[0].name) await setChains([tempChains]);
            // else await setChains(tempChains);
            // console.log('2', chains)


            const rawData = await Promise.all(chains.map(async (chain) => {
                console.log('2', chain)
                return await Promise.all(chain.map(async (pokemon) => {
                    //console.log(`${baseURL}/pokemon/${pokemon.name}`)
                    return await axios.get(`${baseURL}/pokemon/${pokemon.name}`);
                })).then(function (data) {
                    return data
                })
            })).then(function (data) {
                return data
            })


            console.log('3', rawData)

            if (rawData.length > 0) {
                await setRes(rawData)
                await setLoading(false);

            } else {
                //sendQuery()
            }

        } catch (err) {
            setError(err);
        }
    }, [url]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, url, d]);

    return { loading, error, res };
}