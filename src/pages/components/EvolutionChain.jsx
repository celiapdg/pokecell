import { useEffect, useMemo, useState } from "react";
import { getPokemon } from "../../helpers/getPokemonData";
import { useFetchEvolutions } from "../../hooks/useFetchEvolutions"
import { LoadingMessage } from "./LoadingMessage"

export const EvolutionChain = ({ evolutionUrl = '' }) => {

    const [dataReady, setDataReady] = useState(false);
    const { loading, error, res } = useFetchEvolutions(evolutionUrl, dataReady)
    console.log(res);

    const chain = useMemo(() => {
        if (!loading) {
            if (!!res && res.length > 0) {
                console.log('RESULTADO', res)
                const finalData = res.map((row) => {
                    return row.map((data) => {
                        //console.log(data)
                        return getPokemon(data.data);
                    })
                })
                setDataReady(true);
                console.log('final', finalData)
                return finalData;
            }
        } else {
            setDataReady(false);
        }
    }, [res]);





    return (
        <>
            {
                !dataReady && <LoadingMessage />
            }
            {/* {dataReady && chain[0][0].name} */}
            {console.log(res)}
        </>

    )
}
