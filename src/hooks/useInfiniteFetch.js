import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const baseURL = 'https://pokeapi.co/api/v2'

export const useInfiniteFetch = (limit, offset, type) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const callURL = `${baseURL}/${type}/?limit=${limit}&offset=${offset}`;

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const { data } = await axios.get(callURL);

            switch (type) {
                case 'pokemon':
                    // para la api de pokemon hay que hacer una llamada para cada imagen
                    const finalListPromises = data.results.map(async (poke) => {
                        const res = await axios.get(poke.url);
                        poke.imgDef = res.data.sprites.other["official-artwork"].front_default;
                        poke.types = res.data.types.map(type => type.type);
                        // console.log(res.data.sprites.other.home.front_default);
                        // console.log(res.data.sprites.other.home.front_shiny);
                        return poke;
                    })
                    const finalList = await Promise.all(finalListPromises);
                    await setList((prev) => [...prev, ...finalList]);
                    break;
                case 'move':

                    break;

                default:
                    break;
            }

            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [offset]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, offset]);

    return { loading, error, list };
}

// fuente: https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a