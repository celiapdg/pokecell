import { Button, Typography } from "@mui/material"
import { typeMapping } from "../../helpers/typeColorMapping"

export const TypeTags = ({ name, url }) => {

    return (
        <Typography p={0.7} mr={1}
            textAlign='center'
            sx={{
                display: 'inline-block',
                borderRadius: '0.4em',
                minWidth: '60px',
                backgroundColor: typeMapping[name],
                "&:hover": {
                    backgroundColor: typeMapping[name]
                }
            }}> {name.toUpperCase()}</Typography >
    )
}
