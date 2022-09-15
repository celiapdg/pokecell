import { Search } from '@mui/icons-material';
import { Box, FormControl, InputBase, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { typeColorMapping } from '../../../helpers/typeColorMapping';
import { TypeTag } from '../../TypesPage/components';
import { TypeIcon } from '../../TypesPage/components/TypeIcon';


export const PokeFilterBar = () => {
    const pathname = 'pokemons';
    const route = useParams();

    const [limits, setLimits] = useState({ start: "1", end: "898" });
    const [typeName, setTypeName] = useState(route['*']?.split('/') || []);
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

    const handleTypesChange = (event) => {
        const {
            target: { value },
        } = event;

        setTypeName(value);

    };

    const handleLimitChange = (e) => {
        setLimits({
            ...limits,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {

        let realLimit = {
            start: Number(limits.start) || 1,
            end: Number(limits.end) || 898
        }

        if (realLimit.start > realLimit.end) {
            console.log('a')
            let temp = realLimit.start;
            realLimit.start = realLimit.end;
            realLimit.end = temp;
        }

        if (realLimit.start < 1) realLimit.start = 1;
        if (realLimit.end > 898) realLimit.end = 898;
        else if (realLimit.end < 1) realLimit.end = 1;

        console.log('limits', realLimit)

        let newLocation = '/' + pathname + '/' + typeName.join('/');

        navigate(newLocation + `?from=${realLimit.start}&to=${realLimit.end}`);

    }, [typeName, limits])



    return (
        <Box display="flex" justifyContent="space-between" mt={2} className="shadow">
            <Box display="flex" >
                <FormControl sx={{ width: { xs: 200, sm: 250, md: 300, lg: 350, xl: 400 }, borderRadius: '24px', backgroundColor: 'white' }}>
                    <Select display='flex'
                        multiple
                        value={typeName}
                        onChange={handleTypesChange}
                        input={<InputBase />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <TypeIcon key={value} label={value} name={value} size='xs' />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        sx={{ borderRadius: '24px', minHeight: '48px', px: 2 }}
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

                <Box mx={2} display="flex" alignItems="center">
                    <FormControl sx={{ ml: 2, mr: 1, width: { xs: 60, lg: 70, xl: 80 }, borderRadius: '24px', backgroundColor: 'white' }}>
                        <InputBase name="start" value={limits.start} sx={{ borderRadius: '24px', minHeight: '48px', px: 2 }} onChange={handleLimitChange} />
                    </FormControl >
                    {'TO'}
                    <FormControl sx={{ mr: 2, ml: 1, width: { xs: 60, lg: 70, xl: 80 }, borderRadius: '24px', backgroundColor: 'white' }}>
                        <InputBase name="end" value={limits.end} sx={{ borderRadius: '24px', minHeight: '48px', px: 2 }} onChange={handleLimitChange} />
                    </FormControl >
                </Box>

            </Box>

            <Search fontSize='large' />
        </Box >
    );
}

