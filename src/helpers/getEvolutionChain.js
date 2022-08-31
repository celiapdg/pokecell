export const getChains = (chain = {}) => {

    if (chain.evolves_to?.length > 0) {
        if (chain.evolves_to.length > 1) {
            return chain.evolves_to.map((c) => [getTaxon(chain), ...getChains(c)]);
        }
        const nextEv = getChains(chain.evolves_to[0]);

        if (!nextEv[0].species.name) {
            let res = []
            for (const element of nextEv) {
                res.push([getTaxon(chain), ...element])
            }
            return res;
        }
        return [getTaxon(chain), ...nextEv]

    } else {
        return [getTaxon(chain)];
    }
}


const getTaxon = (chainElement) => {
    return { species: chainElement.species, details: chainElement.evolution_details }
}