import { Paper } from "@mui/material"
import { Navbar } from "../components/Navbar"

const styles = {
    backgroundColor: '#FFFDE3',
    // backgroundImage: 'url(src/assets/pattern.jpg)',
    // backgroundSize: '30%'
};

export const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Paper style={styles} elevation={0} square
                sx={{ height: '100%' }}>
                {children}
            </Paper>

        </>
    )
}
