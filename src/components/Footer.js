import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate('/home');
  };

  return (
    <Box sx={{ bgcolor: 'blue', p: 2, marginTop: 'auto', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
      <Typography variant="body1" color="white" align="center">
    
      </Typography>
      <Box>
        <Button color="inherit" onClick={handleFeedbackClick}>
          Обратная связь
        </Button>
        <Button color="inherit" onClick={() => console.log("Другие действия")}>
          Другие действия
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
