import { Typography } from "@mui/material"
import { typeColorMapping } from "../../helpers/typeColorMapping"

export const TypeTag = ({ name, variant, padding = 0.7 }) => {

    return (
        <Typography p={padding} m={0.3}
            variant={variant}
            textAlign='center'
            sx={{
                display: 'inline-block',
                borderRadius: '0.4em',
                minWidth: '60px',
                fontFamily: 'monospace',
                fontWeight: 700,
                backgroundColor: typeColorMapping[name],
                "&:hover": {
                    backgroundColor: typeColorMapping[name]
                }
            }}> {name.toUpperCase()}</Typography >
    )
}
