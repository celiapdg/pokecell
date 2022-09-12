import { Box, Typography } from "@mui/material"
import { typeColorMapping } from "../../../helpers/typeColorMapping"

export const TypeTag = ({ name, variant, padding = 0.7, size = 'md' }) => {

    const sizes = {
        xs: {
            fontSize: '1em',
            padding: 0.4,
            margin: 0,
            borderRadius: '10px',
            sizeBox: '100px',
            sizeIcon: '20px',
        },
        md: {
            fontSize: '1.2em',
            padding: 0.4,
            margin: 0.2,
            borderRadius: '17px',
            sizeBox: '108px',
            sizeIcon: '28px',
        },
        lg: {
            variant: 'h5',
            padding: 0.6,
            margin: 0.3,
            borderRadius: '20px',
            sizeBox: '148px',
            sizeIcon: '28px',
        },
        xl: {
            variant: 'h3',
            padding: 2,
            margin: 0.2,
            borderRadius: '25px',
            sizeBox: '500px',
            sizeIcon: '36px',
        }
    }


    return (
        <Box p={sizes[size].padding} px={sizes[size].padding * 2.5} m={sizes[size].margin}
            justifyContent='space-between' alignItems='center'
            sx={{
                display: 'flex',
                borderRadius: sizes[size].borderRadius,
                width: 'fit-content',
                backgroundColor: typeColorMapping[name],
                "&:hover": {
                    backgroundColor: typeColorMapping[name]
                }
            }}>
            <Typography
                variant={sizes[size].variant} pr={sizes[size].padding}
                textAlign='center'
                sx={{
                    fontSize: sizes[size].fontSize, color: 'white',
                    fontWeight: 700,
                }}> {name.toUpperCase()}</Typography >
            <Box
                component="img"
                src={'/src/assets/icons/' + name + '.svg'}
                sx={{
                    display: 'inline-block',
                    width: sizes[size].sizeIcon,
                    height: sizes[size].sizeIcon,

                }}>
            </Box>
        </Box>
    )
}
