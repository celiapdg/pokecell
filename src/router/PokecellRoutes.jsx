import { Navigate, Route, Routes } from "react-router-dom"
import { LandingPage, PokemonListPage, SkillsPage, TypesPage } from "../pages"

export const PokecellRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="pokemon" element={<PokemonListPage />} />
            <Route path="types" element={<TypesPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
