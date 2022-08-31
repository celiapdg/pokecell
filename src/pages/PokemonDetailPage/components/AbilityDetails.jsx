import { Box, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { getAbility } from "../../../helpers/getPokemonData";
import { useFetch } from "../../../hooks/useFetch";
import { LoadingMessage } from "../../components";



export const AbilityDetails = ({ url }) => {

    const [dataReady, setDataReady] = useState(false);
    const { loading, error, res } = useFetch(url);

    const ability = useMemo(() => {
        if (!loading) {
            if (!!res) {
                //console.log(res)
                setDataReady(true);
                return getAbility(res);
            }
        }
    }, [res]);

    return (
        <Box textAlign='center' p={2} sx={{ width: '100%', fontFamily: 'monospace' }}>
            {!dataReady && <LoadingMessage />}
            {dataReady &&
                <>
                    <Typography sx={{ fontFamily: 'monospace', textTransform: 'capitalize', fontSize: '1.5em', fontWeight: 700 }}>{ability.name}</Typography>
                    <Typography sx={{ fontFamily: 'monospace' }}>{ability.effect}</Typography>
                </>
            }
        </Box>


    )
}
