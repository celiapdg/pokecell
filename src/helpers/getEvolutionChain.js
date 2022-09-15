export const getChains = (chain = {}) => {

    if (chain.evolves_to?.length > 0) {
        if (chain.evolves_to.length > 1) {
            return chain.evolves_to.map((c) => [getTaxon(chain), ...getChains(c)]);
        }
        const nextEv = getChains(chain.evolves_to[0]);

        if (!nextEv[0].species?.name) {
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

export const getEvolutionConditions = (details) => {
    let evolutionDetails = {
        trigger: details.trigger?.name.replace('-', ' '),
    }

    delete details.trigger;
    let data = Object.entries(details);
    data = data.filter(condition => !!condition[1])
    evolutionDetails = {
        ...evolutionDetails,
        conditions: data.map(condition => (
            [
                parseConditionName(condition[0]), parseConditionValue(condition[1])
            ]))

    }

    if (evolutionDetails.trigger === 'level up' &&
        evolutionDetails.conditions.some(c => c[0] === 'level')) {
        delete evolutionDetails.trigger;
    };

    return evolutionDetails;

}

const parseConditionName = (condition) => {
    condition = condition.replaceAll('_', ' ')
        .replace('location', 'in')
        .replace('time of day', 'during')
        .replace('held item', 'holding')
        .replace('item', '')
        .replace('known move type', 'knowing a move of type')
        .replace('known move', 'knowing the move')
        .replace('min ', '')
        .replace('turn upside down', 'turning the console upside down')
        .replace('needs overworld rain', 'while raining')
    return condition;
}

const parseConditionValue = (condition) => {
    if (!!condition.name) return condition.name.replaceAll('-', ' ');
    if (condition === true) return '';
    if (typeof (condition) === 'number') return `${condition}+`
    return condition;
}