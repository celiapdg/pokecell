import { Box } from "@mui/material"
import { typeColorMapping } from "../../../helpers/typeColorMapping"

// https://github.com/duiker101/pokemon-type-svg-icons

export const TypeIcon = ({ name, size = 'md' }) => {
    const sizes = {
        xs: {
            sizeBox: '28px',
            sizeIcon: '20px',
        },
        md: {
            sizeBox: '42px',
            sizeIcon: '28px',
        },
        lg: {
            sizeBox: '50px',
            sizeIcon: '32px',
        },
        xl: {
            sizeBox: '60px',
            sizeIcon: '36px',
        }
    }

    return (
        <Box mx={0.2} display='flex' alignItems='center' justifyContent='center' sx={{
            width: sizes[size].sizeBox,
            height: sizes[size].sizeBox,
            borderRadius: '50%',
            backgroundColor: typeColorMapping[name],
            "&:hover": {
                backgroundColor: typeColorMapping[name]
            }
        }}>
            <Box
                component="img"
                src={'/src/assets/icons/' + name + '.svg'}
                sx={{
                    display: 'inline-block',
                    width: sizes[size].sizeIcon,
                    height: sizes[size].sizeIcon,

                }}>
            </Box>
        </Box >
    )
}
