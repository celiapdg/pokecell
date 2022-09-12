import { Box } from "@mui/material";
import { MainLayout } from "../layouts/MainLayout";
import { TypesTable } from "./components/TypesTable";
import useDraggableScroll from 'use-draggable-scroll';
import { useRef } from "react";



export const TypesPage = () => {
    const ref = useRef(null);

    const { onMouseDown } = useDraggableScroll(ref);

    return (
        <>
            <MainLayout>

                <Box position='fixed' maxWidth='fit-content'
                    overflow='auto' className='hidden-scroll'
                    ref={ref} onMouseDown={onMouseDown}
                    top={{ xs: '75px', sm: '80px', md: '110px' }} bottom={0} left={0} right={0}
                    sx={{
                        margin: '0 auto',
                        borderRadius: { md: '25px' },
                        scrollSnapType: 'both'
                    }}>
                    <TypesTable />

                </Box>

            </MainLayout>

        </>
    )
}
