import { Navigate, Route, Routes } from "react-router-dom"
import { LandingPage, PokemonListPage, SkillsPage, TypesPage, TypesDetailPage, PokemonDetailPage } from "../pages"

export const PokecellRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="pokemon" element={<PokemonListPage />} />
            <Route path="pokemon/:pokemonName" element={<PokemonDetailPage />} />
            <Route path="types" element={<TypesPage />} />
            <Route path="types/:typeName" element={<TypesDetailPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
