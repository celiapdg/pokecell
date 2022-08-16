import { Navbar } from "../components/Navbar"

export const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
