import { Navigate, Route, Routes } from "react-router-dom"
import { LandingPage, PokemonDetailPage, PokemonListPage, SkillsPage, TypesDetailPage, TypesPage } from "../pages"

export const PokecellRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="pokemons/*" element={<PokemonListPage />} />
            <Route path="pokemons" element={<PokemonListPage />} />
            <Route path="pokemon/:pokemonName" element={<PokemonDetailPage />} />
            <Route path="types" element={<TypesPage />} />
            <Route path="types/:typeName" element={<TypesDetailPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
