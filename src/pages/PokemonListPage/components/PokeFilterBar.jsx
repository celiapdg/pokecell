import { Box, FormControl, InputBase, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { typeColorMapping } from '../../../helpers/typeColorMapping';
import { TypeTag } from '../../TypesPage/components';
import { TypeIcon } from '../../TypesPage/components/TypeIcon';


export const PokeFilterBar = ({ }) => {
    const pathname = 'pokemons';

    const [typeName, setTypeName] = useState([]);
    const types = Object.keys(typeColorMapping);

    let navigate = useNavigate();

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setTypeName(value);

        let newLocation = '/' + pathname + '/' + value.join('/');
        console.log(newLocation)
        navigate(newLocation);

    };


    return (
        <div>
            <FormControl sx={{ mt: 2, width: 400, borderRadius: '24px', backgroundColor: 'white' }}>
                <Select display='flex'
                    multiple
                    value={typeName}
                    onChange={handleChange}
                    input={<InputBase />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <TypeIcon key={value} label={value} name={value} size='xs' />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    sx={{ borderRadius: '24px', height: '48px', px: 2 }}
                >
                    {types.map((type) => (
                        <MenuItem
                            key={type}
                            value={type}
                        >
                            <TypeTag name={type} size='xs' />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl >
        </div >
    );
}

