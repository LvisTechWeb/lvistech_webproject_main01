import React from 'react'
import { Layout, Container } from '../components'
import tw, { styled } from 'twin.macro'
import {  makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import colors from '../components/colors'
import "../components/custom.css";
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper1: {
      padding: theme.spacing(2),
      margin: 'auto',
      height:450
      
    },
    paper3: {
      padding: theme.spacing(2),
      margin: 'auto',
      height:600
      
    },
    paper2: {
      padding: theme.spacing(2),
      margin: 'auto',
      height:450
      
    },
    paper4: {
      padding: theme.spacing(2),
      margin: 'auto',
      height:500
      
    },
    image: {
      width: 330,
      height: 300,
    },
    img: {
      height:300,
      width:300
    },
    img1: {
      height:500,
      width:500,
      
    },
    large: {
      width: 500,
      height: 500
    },
  }),
);

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <Layout >
    
        <br/>
      <h2 align='center'> <b>Founding Partners </b></h2>
        <div className={classes.root}>
      <Paper className={classes.paper1} elevation={3}>
        <Grid container spacing={6}>
          <Grid item>
          <Avatar alt="Remy Sharp" src={require('../pages/srinivas.png')} className={classes.img} />
            
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography   style={{ fontSize:26}}>
          <b>LV…</b>
          </Typography>
                <Typography variant="body2"  component="p" style={{ fontSize:22,fontWeight:600}}>
          Mr. L Venkateshwaruluis a successful entrepreneur with decades of experience in Heavy Engineering, Infrastructure & Manufacturing.<br/>
          LV is the Managing Director for LvisTech alongside many other companies which fall under his Investments.<br/>
         He is also the Managing Partner for Mahalaxmi Pipes which is into the manufacturing industry. .<br/>
         Mr. LV has great diversified experience in funding into different industries from Manufacturing to IT. .<br/>
         His more than 20 years of experience into business has made him a visionary in partnering with .<br/>
         Companies that can bring a transformation into industry rituals, so is his view towards LvisTech and.<br/>
          has convinced him to be one of the Founding Partners and key promoters of the company

          </Typography>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <br/>

      <Paper className={classes.paper4} elevation={3}>
        <Grid container spacing={6}>
          
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography  style={{ fontSize:26}}>
          <b> Sreenivas Indraganti….</b>
          </Typography>
                <Typography variant="body2"  component="p" style={{ fontSize:22,fontWeight:600}}>
          Sreenivas is a strategic thinker and experienced HR leader with 20 years of experience into organizational management.
           He has worked across industry sectors in core HR functions covering diversified aspects of the HR life cycle and Talent Management,
            managing HR for a location and specializing in leading the HR functions. He has been an integral part in complete Infrastructure Planning,
           Budget Accounting and Financial Expenditures of the company. He has always laid pillars to HR centric and Process centric organization management.<br/>

<br/>

            Sreenivas has always demonstrated strategic leadership in driving organization change with focus on talent development,
             performance frameworks, operational excellence & process innovation.<br/> He is a principled& compassionateleader who promotes the culture of inclusiveness,<br/>
              employee wellness and an open culture that feeds our growing organization.

          </Typography>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            
              <Avatar alt="Remy Sharp" src={require('../pages/srinivas.jpg')} className={classes.img} />
            
          </Grid> 
        </Grid>
      </Paper>

      <br/>

      <Paper className={classes.paper2} elevation={3}>
        <Grid container spacing={6}>
        <Grid item>
           
            <Avatar alt="Remy Sharp" src={require('../pages/radhikaGaru.jpg')} className={classes.img} />
             
            
          </Grid> 
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
            
              <Grid item xs>
              <Typography  style={{ fontSize:26}}>
          <b> Radhika Indraghanty</b>
          </Typography>
                <Typography variant="body2"  component="p" style={{ fontSize:22,fontWeight:600}}>
          Radhika is a seasoned professional in Software Quality Engineering with a wide variety of industry experience ranging from medical devices, insurance, enterprise software, risk & compliance.<br/>
          She brings deep expertise in testing and evaluating products built on Hadoop Big Data ecosystem, AWS & Azure Public Cloud for large enterprises.<br/>
           With her experience around DevOps and CI/CD and managing multiple product lines and Agile teams, she brings the necessary culture and leadership to LVISTech in delivering robust and timely solution/services to our customers. 
           Radhika has a Bachelors in Computer Science & a Masters in Computer Science Applications.

          </Typography>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Paper>
    </div>

    <br/>
    <h2 align='center'> <b>Executive Management Team</b> </h2>

    <Card>
      <CardActionArea>
        <CardContent>
          <Typography style={{ fontSize:26}} >
          <b>Sanjoy Das (Chief Engineering Officer)</b>
          <br/>
          </Typography>
          <Typography variant="body2"  component="p" style={{ fontSize:22,fontWeight:600}}>
          Sanjoy Das is a seasoned software professional with over 28 years of wide-ranging experience in developing enterprise-level large-scale software products, platforms and solutions.
<br/>
           He did his B.Tech in Computer Science & Engineering from IIT Kharagpur and an Executive General Management Program from IIM Bangalore. He worked with Oracle for around 13 years,
<br/>
         heading and building the OBIEE product suites at Oracle IDC, Bangalore. 
<br/>
         Overall, he worked in multiple industry sectors and built software products, platforms and solutions in various domains - Mobility, Data Analytics, IoT, Blockchain, GIS/GeoSpatial,
<br/> 
         Messaging, Telecommunication, Network Management System, Banking, Process Control, etc.
<br/>

<br/>
A coder by heart, Sanjoy has always been hands-on and churning code throughout his career.
<br/>
 He spent last 6 years of his career in architecting, designing and implementing server-less products and solutions using AWS cloud services, in a startup ecosystem. 
<br/>
 During his entrepreneurial journey, he founded 3 companies in the IoT and Mobility domain that enabled his deep understanding of building a software business ground up and taking that to the market. 
<br/>
Lately his interest and contribution has been in Cloud Data platforms, Data Engineering, Data Science and AI/ML. Sanjoy has published patents to his credit
<br/>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card>
      <CardActionArea>
        <CardContent>
          <Typography style={{ fontSize:26}}>
          <b>Manojith Padala (Chief Innovation Officer)</b>
          <br/>
          </Typography>
          <Typography variant="body2"  component="p" style={{ fontSize:22,fontWeight:600}}>
          Manojith is a deep-rooted risk technologist from Banking & Financial Services Industry with over 20+ years hands on experience in architecting and implementing high performance quantitative risk analytic systems for a variety of derivative products. <br/>
          Products include fixed income, FX, equity, commodity, CMO, CMBS, ABS and credit. <br/>
          Systems were for both market risk and counterparty risk.<br/><br/>
           Some were built for the sell side. His expertise includes implementing a unified analytic platform that supported exploratory data analysis on big data
           and in running machine learning, NLP and Deep Learning algorithms on the data. Systems implemented have thousands of cores and deal with 100s of TB of data.
        Manojith brings practical and yet modern perspectives to enabling Machine Leaning and AI for enterprise solutions. He holds a Bachelors in Electrical Engineering,
           Master in Mathematical Finance and a Masters in Computer Science. <br/>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>









   
    </Layout>
  );
}
