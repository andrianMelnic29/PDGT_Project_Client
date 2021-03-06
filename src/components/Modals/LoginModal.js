import React, { Component } from 'react'
import { Modal, Menu, Button } from 'semantic-ui-react'
import LoginForm from '../Forms/LoginForm'
class LoginModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  render () {
    const { open } = this.state
    return (
      <Modal
        open = {open}
        onOpen={this.open}
        onClose={this.close}
        trigger={<Menu.Item content='Login' />}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>

          <LoginForm closeModal={this.close}/>

        </Modal.Content>
        <Modal.Actions>
          <Button icon='close' content='Chiudi' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}
export default LoginModal
