import { Box, Button, Typography } from '@mui/material';

import React from 'react';

import { Link } from 'react-router-dom';

import Header from './Header';
const Home = () => {
  return (
    <>
      
      <div>
        
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Button
                  LinkComponent={Link} to="/homeLayout/books"
                  sx={{ marginTop: 15,backgroundColor:'orangeRed' }}
                  variant='contained'>
                  <Typography variant='h3'>View All products</Typography>
              </Button>

          </Box>
      </div>
      </>
  )
}

export default Home;