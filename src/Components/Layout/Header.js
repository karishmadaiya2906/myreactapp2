import React ,{useState} from 'react'
import {AppBar,Box,Drawer,IconButton,Toolbar,Typography} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {Link,NavLink} from 'react-router-dom';
import "../../Styles/Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [mobileOpen , setMobileOpen] =useState(false)
  //hndle menu click
  const handleDrawerToggle =() =>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle}sx={{textAlign:'center'}}>
<Typography color={"goldenrod"} variant='h6' component="div" sx={{ padding:2 ,margin:2}}> 
        <FastfoodIcon />
          My Hotel
         
        </Typography>
        
          <ul className='mobile-navigation'>
            <li>
              <Link to={'/Home'}>Home</Link>
            </li>
            <li>
              <Link to={'/Items'}>Items</Link>
            </li>
            <li>
              <Link to={'/About'}>About</Link>
            </li>
            <li>
              <Link to={'/Contact'}>FAQ</Link>
            </li>
            <li>
              <Link to={'/Checkout'}><ShoppingCartIcon/></Link>
            </li>
            
            
          </ul>
        </Box>
    
  )
    return (
    <>
    <Box>
     <AppBar component={"nav"} sx={{bgcolor:"black"}}>
   <Toolbar>
    <IconButton color="inherit" aria-label='open drwaer' edge="start" sx={{mr:0,display:{sm:"none"}}}
     onClick={handleDrawerToggle}>
<MenuIcon/>
    </IconButton>
   <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}> 
        <FastfoodIcon />
        Miracle Resturan
         
        </Typography>
        <Box sx={{display : {xs : "none",sm:"block"}} }>
          <ul className='navigation-menu'>
            <li  >
              < NavLink  activeClassName="active" to={'/Home'}>Home</NavLink>
            </li>
            <li>
              <NavLink  activeClassName="active" to={'/Items'}>Items</NavLink>
            </li>
            <li>
              <NavLink  activeClassName="active" to={'/About'}>About</NavLink>
            </li>
            <li>
              <NavLink  activeClassName="active" to={'/Contact'}  style={{cursor:"help"}} >FAQ</NavLink>
            </li>
         
            <li>
              <NavLink  activeClassName="active" to={'/Checkout'}><ShoppingCartIcon/></NavLink>
            </li>
            

          </ul>
        </Box>
   </Toolbar>
    
      </AppBar> 
      <Box component="nav">
<Drawer variant="temporary" open={mobileOpen} 
onClose={handleDrawerToggle} 
sx={{display:{xs:'block',sm:"none"},"& . MuiDrawer-paper":{boxSizing:"border-box",width:"240px",}}}>
  {drawer}
</Drawer>

      </Box>
      <Box sx={{p:0}}>
        </Box>
      <Toolbar/>
    </Box>
    
    </>
    
  )
}

export default Header;