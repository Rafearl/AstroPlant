import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

const divStyle = {
  width: '19em',
  color: 'black', 
  background: '#F5F5F5',
  padding: '25px 10px',
  marginLeft: '12em',
  borderRadius: '10%',
  transform: 'translate(-50%, -75%)',
  boxShadow: '10px 10px 8px grey'
}

const title = {
  paddingLeft: '0.8em',
  color: 'lightblue',
  fontSize: '3em',
}

const sensor = {
  paddingLeft: '1.5em',
  fontSize: '1.5em',
  fontWeight: '200'
}

const value = {
  fontSize: '1.2em',
  fontWeight: '400'
}

export class MapInfoElementKit extends Component {
  render() {
    return (
        <div style={divStyle} >
                <Grid>
                    <Grid.Row><h1 style={title}>Kits Name</h1></Grid.Row>
                    <Grid.Row><span style={sensor}>Temp: <span style={value}>25 Cº</span></span></Grid.Row>
                    <Grid.Row><span style={sensor}>Air pressure: <span style={value}>800 hpa</span></span></Grid.Row>
                    <Grid.Row><span style={sensor}>Soil Humidity: <span style={value}>80 RH</span></span></Grid.Row>
                </Grid>
        </div>
    )
  }
}

export default MapInfoElementKit
