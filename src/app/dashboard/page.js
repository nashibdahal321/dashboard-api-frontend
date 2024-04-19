"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";
import { useRouter } from 'next/navigation';

import Typography from '@mui/material/Typography';
import Table from "./table"
import { Rowdies } from 'next/font/google';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  React.useEffect ( () => {
    fetch(process.env.BACKEND_URL + "dashboard/item/all/", {
      credentials: 'include'
    })
      .then(res => res.json()).then(res => {
        if (res.items) {
          setRows(res.items)
        } else {
          setRows([{
            "id": "kasdsds",
            "sku": "SKU29929",
            "name": "Sample Name",
            "category": "Heavy",
            "in_stock": 20.3,
            "available_stock": 300.4
        }])
        }
        
      }).catch(res => {
        push("/")
      })
  }, [])

  const drawer = (
    <div style={{height: "100%"}}>
      <List>
        {['Home', 'Items', 'Stock', 'Build', 'Customers', 'Sales Orders', 'Suppliers', 
          'Manufacturers', 'Purchase Orders', 'Reports'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
    
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            borderRightColor: "aqua",
          }}
          style={{
            
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 6, width: { sm: `calc(100% - ${drawerWidth}px)` }, gap:"10px" }}
      >
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <div style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}>
            <Typography variant="h3">
              Item Dashboard
            </Typography>
            <Typography>
              All Items
            </Typography>
            <div style={{margin: "10px"}}>
              <Button variant="contained" color="success">New Item Category</Button>
            </div>
          </div>
          <div style={{
                  width: "50%",
                  paddingRight: "30px"
                }}>
            <List>
                <ListItem key="categories" disablePadding>
                <div style={{
                  justifyContent: "space-around",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%"
                }}>
                  <ListItemText primary="Total Categories" />

                  <p>{rows.map(r=>r.category).filter(function(v,i) { return i==rows.lastIndexOf(v); }).length}</p>
                </div>
                    
                </ListItem>
            </List>
            <Divider />
            <List>
            <ListItem key="categories" disablePadding>
                <div style={{
                  justifyContent: "space-around",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%"
                }}>
                  <ListItemText primary="Total Items" />

                  <p>{rows.length}</p>
                </div>
                    
                </ListItem>
            </List>
          </div>

        </div>

        <div style={{
          marginTop: "50px"
        }}>
          <Table items={rows}/>
        </div>
        
        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;