import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const baseURL = 'https://pokeapi.co/api/v2'

export const useInfiniteFetch = (limit, offset, type) => {
    console.log('limit', limit)
    console.log('offset', offset)
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
                    if (list.length < 898) {

                        // para la api de pokemon hay que hacer una llamada para cada imagen
                        const finalPokePromises = data.results.map(async (poke) => {
                            const res = await axios.get(poke.url);
                            // console.log(res.data)
                            poke.id = res.data.id;
                            poke.imgDef = res.data.sprites.front_default;
                            poke.types = res.data.types.map(type => type.type);
                            // console.log(res.data.sprites.other.home.front_default);
                            // console.log(res.data.sprites.other.home.front_shiny);
                            return poke;
                        })
                        let finalPokeList = await Promise.all(finalPokePromises);
                        if ([...new Set([...list, ...finalPokeList])].length > 898) {
                            finalPokeList = [...new Set([...list, ...finalPokeList])].slice(0, 898);
                        } else {
                            finalPokeList = [...new Set([...list, ...finalPokeList])];
                        }
                        await setList([...finalPokeList]);
                    }

                    break;
                case 'move':
                    const finalMovePromises = data.results.map(async (move) => {
                        const res = await axios.get(move.url);
                        //console.log(res.data)
                        const parsedMove = {
                            name: res.data.name,
                            type: res.data.type.name,
                            power: res.data.power,
                            pp: res.data.pp,
                            damageClass: res.data.damage_class.name,
                            effect: res.data.effect_entries[0].effect,
                            accuracy: res.data.accuracy,
                            learnedBy: res.data.learned_by_pokemon
                        }

                        return parsedMove;
                    })
                    const finalMoveList = await Promise.all(finalMovePromises);

                    await setList((prev) => [...prev, ...finalMoveList]);
                    break;

                default:
                    break;
            }

            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }, [offset]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, offset]);

    return { loading, error, list };
}

// fuente: https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a