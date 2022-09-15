import { useState, useEffect, useCallback } from "react";
import { typeIdMapping } from "../helpers/typeColorMapping";
import { pokemonAPI } from "../api/pokemonAPI";



const types = Object.keys(typeIdMapping);

export const useFetchDamages = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [res, setRes] = useState([]);


    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const typesInfo = await Promise.all(types.map(async (type) => {
                const { data } = await pokemonAPI.get('/type/' + type);
                return {
                    type,
                    dmg: data.damage_relations
                }
            })).then(function (data) {
                // console.log(data)
                return data
            })


            let table = new Array(18).fill([]);
            // console.log(table)
            table = table.map((row, i) => {
                row = new Array(18).fill(1);
                typesInfo[i].dmg.double_damage_to.map(({ name }) => {
                    row[typeIdMapping[name] - 1] = 2;
                })
                typesInfo[i].dmg.half_damage_to.map(({ name }) => {
                    row[typeIdMapping[name] - 1] = 0.5;
                })
                typesInfo[i].dmg.no_damage_to.map(({ name }) => {
                    row[typeIdMapping[name] - 1] = 0;
                })
                // console.log(typesInfo[i].type, row);
                return row;

            })

            // console.log('final', table)
            setRes(table);
            setLoading(false);

        } catch (err) {
            console.log(err);
            setError(err);
        }
    }, []);

    useEffect(() => {
        sendQuery();
    }, [sendQuery]);

    return { loading, error, res };
}