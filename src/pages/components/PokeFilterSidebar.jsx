import { Box, Checkbox, Divider, Drawer, Grid, List, ListItem, ListItemButton } from '@mui/material';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { typeColorMapping } from '../../helpers/typeColorMapping';
import { TypeTag } from '../TypesPage/components';


export const PokeFilterSidebar = ({ }) => {
    const { pathname } = useLocation();
    const [location, setLocation] = useState(pathname);

    let navigate = useNavigate();


    const handleFilters = ({ target }) => {
        let newLocation = location;
        if (target.checked) {
            newLocation = newLocation + '/' + target.name;
        } else {
            newLocation = newLocation.replace('/' + target.name, '');
        }
        setLocation(newLocation);
        navigate(newLocation);
    }

    const drawer = (
        <Box pt={10} sx={{ width: { md: 180, lg: 210, xl: 240 } }}>
            {/* TODO: Search box */}
            <Divider />
            <List>
                {Object.entries(typeColorMapping).map((type, index) => (
                    <ListItem key={type} disablePadding>
                        <ListItemButton sx={{ height: 50 }}>
                            {/* TODO: tamaño sm de la typetag */}
                            <Checkbox name={`${type[0]}`} onChange={handleFilters} sx={{
                                color: `${type[1]}`,
                                '&.Mui-checked': {
                                    color: `${type[1]}`,
                                }
                            }} />
                            <TypeTag name={type[0]} size='xs' />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );

    return (
        <>
            <Drawer variant="permanent">
                {drawer}
            </Drawer>

        </>

    );
}
