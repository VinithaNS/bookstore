import React,{useState} from 'react'
import { AppBar,Tabs,Tab, Toolbar, Typography } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
    const [ value, setValue ] = useState();
    const navigate = useNavigate();
  return (
      <>
     <AppBar sx={{backgroundColor:"orangeRed"}} position='static'>
              <Toolbar >
                  <NavLink to='/' style={{color:'white'}}>
           <Typography>
             <MenuBookOutlinedIcon/>
                      </Typography>
                      </NavLink>
                  <Tabs
                      sx={{marginLeft:"auto"}}
                      textColor="inherit"
                      indicatorColor="primary"
                      value={value}
                      onChange={(e, val) => setValue(val)}
                  >
                      
                      <Tab LinkComponent={NavLink } to="/homeLayout/add" label='Add Product' />
                      <Tab LinkComponent={NavLink } to="/homeLayout/books" label='Books' />
                      <Tab LinkComponent={NavLink} to="/homeLayout/about" label='About Us' />
                     
                  </Tabs>
                  <button onClick={()=>navigate("/login")}className="logoutBtn">Logout</button>
        </Toolbar>
    </AppBar>
          </>
  )
}

export default Header;