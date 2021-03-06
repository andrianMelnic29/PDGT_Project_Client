import React from 'react'
import { Menu, Icon, Input, Responsive } from 'semantic-ui-react'
import LoginModal from './Modals/LoginModal'
import RegisterModal from './Modals/RegisterModal'
import SearchModal from './Modals/SearchModal'
import AddLocationModal from './Modals/AddLocationModal'
import AuthContext from '../context/authContext'

const NavMenu = (props) => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <Menu style={{ margin: '0', borderRadius: '0', height: '45px' }} inverted>
          <Menu.Item header>
            <Icon name='tint' color='blue' />
            App
          </Menu.Item>
          {/* Desktop */}
          {
            !context.token &&
            <React.Fragment>
              <LoginModal />
              <RegisterModal />
            </React.Fragment>
          }
          {
            context.token &&
            <React.Fragment>
              <Menu.Item content='Logout' onClick={context.logout}/>
              <AddLocationModal
                userLat={props.userLat}
                userLng={props.userLng}
                getAllLocations={props.getAllLocations}
              />
            </React.Fragment>
          }
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Menu.Item>
              <Input placeholder='Cerca' size='mini' onChange={props.changeFilter}/>
            </Menu.Item>
          </Responsive>

          {/* Mobile */}
          <Responsive {...Responsive.onlyMobile}>
            <Menu.Item>
              <SearchModal changeFilter={props.changeFilter}/>
            </Menu.Item>
          </Responsive>
          {/* <Menu.Menu
                position='right'>
                <Responsive
                  {...Responsive.onlyMobile}>
                  <Menu.Item
                    position='right'
                    icon='content'
                    className='button'
                    onClick={this.handleContentClick}>
                    <Dropdown>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          Login
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Register
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Item>

                </Responsive>
              </Menu.Menu> */}

        </Menu>
      )
    }
    }
  </AuthContext.Consumer>

)
export default NavMenu
