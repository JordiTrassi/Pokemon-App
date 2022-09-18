import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Modal } from '@mui/material';
import { Error } from '@mui/icons-material';
import { resetNoApiResults } from '../store';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ErrorModal = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { errorMessage } = useSelector(state => state.pokemonStore);
    
    const handleOpen = () => setOpen(true);
    

    const handleClose = () => {
        setOpen(false);
        dispatch(resetNoApiResults());
    };


    useEffect(() => {
        if (errorMessage.length > 0) {
            handleOpen();
        }
    }, [errorMessage]);

    
    return (
        
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                textAlign='center'
                sx={style}
            >
                <Error fontSize='large' color='primary' />
                <Typography id="modal-modal-title" variant="h6" component="h2" color="primary">
                    NO HAY RESULTADOS DISPONIBLES.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {errorMessage}.
                </Typography>
            </Box>
        </Modal>
        
    );
};
