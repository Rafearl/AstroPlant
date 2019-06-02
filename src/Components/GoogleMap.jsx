import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import MapInfoElement from './MapInfoElement';


const mapMapData = (state) => ({
  mapData: state.mapData
})
  
class GoogleMap extends Component {
    state = {
      showinfo: false
    }

    static defaultProps = {
      center: {lat: 40.416705, lng: -3.703582},
      zoom: 6
    };
   
    handleClick = () => {
      if(this.state.showInfo === true) {
        this.setState({
          showInfo: false
        })
      }else {
        this.setState({
          showInfo: true
        })
      }
    }

    render() {
      const { mapData } = this.props

      return (
        <div style={{ height: '100vh', width: '100%', paddingTop:"2em" }}>

          <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyCuMsubyoMGdVPVtenYXf2EYIWE3eSm95M"}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              >
              {mapData.map( kit =>
                <MapInfoElement                 
                  lat={kit.lat} 
                  lng={kit.lng}
                  handleClick={this.handleClick}
                  showInfo={this.state.showInfo}
                />
               )}
              {/*
              <MapInfoElement
                lat={mapData[0].lat} 
                lng={mapData[0].lng}
                handleClick={this.handleClick}
                showInfo={this.state.showInfo}
              />
              */}
          </GoogleMapReact>
        </div>
    )
}
}

export default connect(mapMapData)(GoogleMap)
