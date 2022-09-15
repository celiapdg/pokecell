import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { parseName } from "../../../helpers/parseInfo"
import { TypeIcon } from "../../TypesPage/components/TypeIcon"
import { PokeCard } from "./PokeCard"

export const PokeList = ({ list }) => {

    const path = useLocation();

    const types = useMemo(() => {
        const res = path.pathname.split('/').slice(2);
        if (res[0] !== '') return res;
    }, [path.pathname]);

    const pokeLimits = useMemo(() => {
        let temp = path.search.replace('?from=', '').replace('to=', '');
        temp = temp.split('&');
        return {
            start: Number(temp[0]),
            end: Number(temp[1]),
            amount: Number(temp[1]) - Number(temp[0]) + 1
        }
    }, [path.search])

    const pokemons = list?.slice(pokeLimits.start - 1, pokeLimits.end)
        .filter((pokemon) => ((!types) || pokemon.types.some(r => types.indexOf(r.name) >= 0)));

    return (
        <>
            {(pokemons.length > 0) && pokemons.map((pokemon, i) => (
                <PokeCard key={i}
                    id={pokemon.id}
                    name={parseName(pokemon.name)}
                    route={`/pokemon/${pokemon.id}`}
                    img={pokemon.imgDef}>
                    {pokemon.types.map((type) => (
                        <TypeIcon key={`${pokemon.name}-${type.name}`}
                            size='xs' name={type.name} />
                    ))
                    }
                </PokeCard>
            )
            )}
        </>
    )
}
