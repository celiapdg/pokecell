import { Box, Typography } from "@mui/material"
import { typeColorMapping } from "../../../helpers/typeColorMapping"

export const TypeTag = ({ name, variant, padding = 0.7, size = 'md' }) => {

    const sizes = {
        xs: {
            fontSize: '1em',
            padding: 0.1,
            margin: 0.2,
            borderRadius: '10px',
        },
        md: {
            fontSize: '1.2em',
            padding: 0.4,
            margin: 0.2,
            borderRadius: '17px',
        },
        lg: {
            variant: 'h5',
            padding: 0.6,
            margin: 0.3,
            borderRadius: '20px',
        },
        xl: {
            variant: 'h3',
            padding: 2,
            margin: 0.2,
            borderRadius: '25px',
        }
    }


    return (
        <Box p={sizes[size].padding} px={sizes[size].padding * 2.5} m={sizes[size].margin}
            sx={{
                display: 'inline-block',
                borderRadius: sizes[size].borderRadius,
                minWidth: '60px',
                backgroundColor: typeColorMapping[name],
                "&:hover": {
                    backgroundColor: typeColorMapping[name]
                }
            }}>
            <Typography
                variant={sizes[size].variant}
                textAlign='center'
                sx={{
                    fontSize: sizes[size].fontSize,
                    fontWeight: 700,
                }}> {name.toUpperCase()}</Typography >
        </Box>
    )
}
