export const getChains = (chain = {}) => {

    if (chain.evolves_to?.length > 0) {
        if (chain.evolves_to.length > 1) {
            return chain.evolves_to.map((c) => [chain.species, ...getChains(c)]);
        }
        const nextEv = getChains(chain.evolves_to[0]);

        if (!nextEv[0].name) {
            let res = []
            for (const element of nextEv) {
                res.push([chain.species, ...element])
            }
            return res;
        }
        return [chain.species, ...nextEv]

    } else return [chain.species];
}