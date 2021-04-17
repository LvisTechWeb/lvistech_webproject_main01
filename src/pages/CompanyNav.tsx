import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'
import colors from '../components/colors'
import NavRoute from './navigationRoutes'
import { useServices } from '../hooks'


import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import "../components/custom.css";
import AniLink from "gatsby-plugin-transition-link/AniLink"




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
      
    },
  }),
);
  
export default function CompanyNav(): JSX.Element {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  
  const [services] = useState(useServices())
  const [visible, setVisibility] = useState(false)
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(min-width: 770px)').matches) {
      setVisibility(true)
    }
  })

  return (
    <>
     
        {/* <TitleButton
          onClick={() => {
            setVisibility(!visible)
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3H22" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 12H22" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 21H22" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </TitleButton> */}
        
        {/* <TitleButton
          className={visible ? 'right-corner' : 'invisibleButton'}
          onClick={() => {
            setVisibility(!visible)
            setExpanded(false)
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L21 21M21 1L1 21" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </TitleButton> */}
     

        {/* <NavigationView className={visible ? '' : 'invisibleNav'}>
          <NavRoute to="/" setVisibility={setVisibility}>
          About Us
        </NavRoute> */}

        
        {/* </NavigationView> */} 
        
      
       
    
       
        <Button tw="text-2xl m-1 p-2 py-3 h-10 "   style={{  textTransform: 'none',color:colors.blue, borderColor:colors.blue,
        background:'none',
        outline : 'none' ,fontSize:25}} className={classes.root}
          ref ={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}  

        >
        <b>Company</b>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList style={{backgroundColor:colors.blue , color:colors.white}} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}><AniLink tw="text-2xl m-1 p-1"   to="/about" style={{ fontSize:20}} duration={2}>  About Us   </AniLink> </MenuItem>
                    <MenuItem onClick={handleClose}> <AniLink tw="text-2xl m-1 p-1"  to="/LeaderShip" style={{ fontSize:20}} duration={2} >Leadership</AniLink></MenuItem>
                    <MenuItem onClick={handleClose}><AniLink tw="text-2xl m-1 p-1" to="/Career" style={{ fontSize:20}} duration={3}>Careers and Culture</AniLink></MenuItem>
                    

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
     
        
      
    
      
   
        
    



      
      
     
    </>
  )
}
