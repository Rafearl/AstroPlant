import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Container, Icon, Button } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import { openModal } from './modals/ModalActions'
import { isBrowser, isTablet } from 'react-device-detect'
import { logOut } from '../Components/auth/authAction'


const actions = {
    openModal,
    logOut
}

const mapState = (state) => ({
    auth: state.auth
})

class Navbar extends Component {


  handleSignin = () => {
      this.props.openModal('LoginModal')
  }

  handleRegister = () => {
      this.props.openModal('RegisterModal')
  }

  routeChange() {
    let path = '/login';
    this.props.history.push(path);
  }

  
  render() {
    const { auth, logOut } = this.props;
    const authenticated = auth.authenticated  
    return (
        <Menu fixed="top"> 
          { isBrowser||isTablet ?   
            <Container>
                <Menu.Item header>
                    <h2>AstroPlant</h2>
                </Menu.Item>
                    <Menu.Item as={NavLink} to="/home" name="home">
                        <Icon name="home" ></Icon>
                        Home
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/map" name="map">
                        <Icon name="map marker alternate"></Icon>
                        Map
                    </Menu.Item>
                    {authenticated &&
                        <Menu.Item as={NavLink} to="/analyze" name="myAstroPlant"> 
                            <Icon name="dashboard"></Icon>
                            myAstroPlant
                        </Menu.Item>
                    }

                    {!authenticated ?
                        <Menu.Item position="right">
                            <Button basic content="Login" onClick={this.handleSignin} />
                            <Button basic content="Sing Up" onClick={this.handleRegister} style={{marginLeft:'0.5em'}} />
                        </Menu.Item>                
                        :
                        <Menu.Item position="right">
                            <Button basic content="LogOut" onClick={logOut} />
                        </Menu.Item>
                     }
 
            </Container>
           : 
            <Container>
                <Menu.Item header>
                    <h2>AstroPlant</h2>
                </Menu.Item>
                <Menu.Item as={NavLink} to="/home" name="home">
                        <Icon name="home" ></Icon>
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/map" name="map">
                        <Icon name="map marker alternate"></Icon>
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/analyze" name="analyze"> 
                        <Icon name="dashboard"></Icon>
                    </Menu.Item>

                    <Menu.Item position="right">
                        <Button basic content="Login"/>
                        <Button basic content="Sing Up" style={{marginLeft:'0.5em'}} />
                    </Menu.Item>
                
            </Container>
            } 
          </Menu>
    )
  }
}

export default withRouter(connect(mapState, actions)(Navbar)) //null because there is no mapstate
