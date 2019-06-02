import React, { Component } from 'react'
import HeadTitle from './HeadTitle'
import { Container, Grid } from 'semantic-ui-react'


import PieChartCards from './PieChartCards';
import LineChartCard from './LineChartCard';



class AnalyzePage extends Component {


  
  render() {
    return (
      <div>
        <HeadTitle titulo="Kits Name" texto=""/>
        
        <LineChartCard />

        <Container style={{paddingTop:"3em"}}>
          <Grid stackable textAlign="center" style={{paddingLeft:"4em", paddingRight:"4em"}} >
            <Grid.Row stackable="1" columns={3} width={16}>
              <Grid.Column >
               <PieChartCards sensor="Air Temp." units="Cº" val="0"/>
              </Grid.Column>  
              <Grid.Column>
               <PieChartCards sensor="Air Pressure" units="hPa" val="1"/>
              </Grid.Column> 
              <Grid.Column>
               <PieChartCards sensor="Soil Humidity" units="HR" val="2"/>
              </Grid.Column>         
            </Grid.Row>      
          </Grid>
        </Container>
      </div>
    )
  }
}

export default AnalyzePage