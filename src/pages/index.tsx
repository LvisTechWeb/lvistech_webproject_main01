import React from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Layout, Services, MissionVison, WhoAreWe, Contacting,Container } from '../components'
import colors from '../components/colors'
import { useAsset } from '../hooks'
import { BigButtonWhite, BigButtonYellow } from '../components/common'
import { Sections, WorkAtLvisTech } from '../components/home_page'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const HeroImage = styled.img`
  ${tw` m-0 w-screen z-0`}
  height:80vh;
`

const HeroContent = styled.div`
  ${tw`z-50  items-start absolute top-0 left-0 text-white w-screen
  lg:w-auto  p-4 mt-16 `}
  height:40vh;
  color: ${colors.baseLight};
`
const tutorialSteps = [
  {
    label: 'EdgeComputing',
    imgPath:
    'https://wallpaperaccess.com/full/1728960.jpg',
  },
  {
    label: 'ML',
    imgPath:
      'https://wallpaperaccess.com/full/1614824.jpg',

  },
  {
    label: 'EMl',
    imgPath:
    'https://www.stratospherenetworks.com/blog/wp-content/uploads/2020/09/cloud-solutions-concept-photo.jpg',
      
  },
]

const useStyles = makeStyles((theme) => ({
 
  img: {
    height:700,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
   
    
  },
}));

export default function Home(): JSX.Element {

  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };







  const heroImage = useAsset('hero-image')
  // const [formDone, setFormDone] = useState(true)
  return (
    // <div tw="relative">
    //   <div tw="absolute">
    <Layout>
 <div tw="relative">
        {/* <HeroImage fluid={heroImage.fluid} /> */}
       <div>
        <HeroImage
          src={require('../pages/bg5.gif')}
          alt="hero image"
        />  
        <HeroContent>
    
        <br/> <br/> <br/>
          <h1  style={{fontSize:60,alignContent:'left'}} >
          <br/> 
            <b>@LVISTECH: Transformation through <br/> Disruptive Technologies</b>
          </h1> 
          <br/><br/><br/>
          
          <br/>

          <br/>
        </HeroContent>
        </div>
       
      {/* <Sections /> */}
      <Contacting />
      </div>
    </Layout>
    //  
    //   <div tw="absolute h-screen w-screen z-50 bg-red-300">
    //     <h1>Sanyam</h1>
    //   </div>
    // </div>
  )
}
