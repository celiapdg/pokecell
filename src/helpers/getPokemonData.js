export const getPokemon = (resP) => {
    if (resP) {
        const pokemon = { name: resP.name }
        pokemon.img = resP.sprites.other["official-artwork"].front_default;
        pokemon.imgHome = resP.sprites.other.home.front_default;
        pokemon.imgHomeShiny = resP.sprites.other.home.front_shiny;
        pokemon.imgHomeF = resP.sprites.other.home.front_female;
        pokemon.imgHomeShinyF = resP.sprites.other.home.front_shiny_female;
        pokemon.types = resP.types.map(type => type.type);
        pokemon.stats = {
            hp: resP.stats[0].base_stat,
            speed: resP.stats[5].base_stat,
            attack: resP.stats[1].base_stat,
            defense: resP.stats[2].base_stat,
            sAttack: resP.stats[3].base_stat,
            sDefense: resP.stats[4].base_stat,
            height: resP.height,
            weight: resP.weight
        }
        pokemon.abilities = resP.abilities.map(ab => ab.ability.url);
        return pokemon;
    }
}


export const getSpecies = (resS) => {
    if (resS) {
        const species = {}
        species.evolutionUrl = resS.evolution_chain.url;
        species.generation = resS.generation.name;
        species.habitat = resS.habitat?.name || 'unknown';
        for (let desc of resS.flavor_text_entries) {
            if (desc.language.name === 'en') {
                species.description = desc.flavor_text.replace('\f', ' ');
                break;
            }
        }

        return species;
    }
}

export const getAbility = (resA) => {
    if (resA) {
        const ability = {}
        ability.name = resA.name;
        ability.effect =
            resA.effect_entries.map(effect => {
                if (effect.language.name === 'en') return effect.short_effect;
            })
        return ability;
    }
}

export const getEvolutions = (resE) => {

}