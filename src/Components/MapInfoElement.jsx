import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import MapInfoElementKit from './MapInfoElementKit';



export class MapInfoElement extends Component {
  render() {
    const { handleClick, showInfo } = this.props 
    return (
        <div>
            <Icon 
                name="map marker alternate" size="big" color="teal" 
                style={{cursor: 'pointer', transform: 'translate(-50%, -50%)'}}
                onClick={handleClick}>
            </Icon>
            
            {showInfo && <MapInfoElementKit/>}
        </div>
    )
  }
}

export default MapInfoElement
