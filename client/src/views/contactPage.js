import React from 'react'

import { Navbar } from '../components/bootstrap'

class ContactPage extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    valid: false,
    visible: false
  }

  handleTimeout = () => {
    setTimeout(function() {
      this.setState({
        visible: false
      })

      alert('Timeout Started')
    }, 5000)
  }

  handleSubmit = () => {
    if (
      this.state.email.length > 5 &&
      this.state.email.includes('@') &&
      this.state.email.includes('.') &&
      this.state.name.length > 2 &&
      this.state.message.length > 5
    ) {
      this.setState({
        visible: true,
        valid: true
      }).then(() => {
        this.handleTimeout()
      })
    } else {
      this.setState({
        visible: true,
        valid: false
      }).then(() => {
        window.location.reload()
      })
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: '#212a36',
            color: 'white',
            minHeight: '825px'
          }}
        >
          <Navbar />

          <div
            class='container-fluid'
            style={{
              padding: 0,
              marginTop: '5vh',
              maxWidth: '85vw'
            }}
          >
            <div
              class='row '
              style={{
                minHeight: '15vh',
                verticalAlign: 'middle',
                textAlign: 'center',
                maxWidth: '90vw',
                margin: 'auto'
              }}
            >
              <div class='col-sm'>
                <p
                  style={{
                    fontSize: '40px',
                    margin: 'auto',
                    marginTop: '5vh',
                    overflowWrap: 'break-word',
                    fontWeight: 900
                  }}
                >
                  Preguntas? Comentarios?
                </p>
                <div
                  style={{
                    marginTop: '1vh',
                    marginBottom: '5vh'
                  }}
                >
                  <p
                    style={{
                      fontSize: '22px',
                      color: '#4c88d8'
                    }}
                  >
                    Mandanos Un Email!
                  </p>
                </div>
              </div>
            </div>
            <div
              class='row'
              style={{
                minHeight: '15vh',
                verticalAlign: 'middle',
                textAlign: 'center',
                maxWidth: '650px',
                margin: 'auto'
              }}
            >
              <div class='col-sm-2' />
              <div class='col-sm-8'>
                <form
                  id='form'
                  action='http://getsimpleform.com/messages?form_api_token=ee1299e7622eae3f0bf430ceba56fd8f'
                  method='post'
                >
                  <div class='form-group'>
                    <h3
                      style={{
                        paddingBottom: '1vh',
                        fontSize: 25
                      }}
                      for='name'
                    >
                      Nombre
                    </h3>
                    <input type='text' id='name' name='name' placeholder='Tu Nombre Aqui' class='form-control name' />
                  </div>
                  <div class='form-group'>
                    <h3
                      style={{
                        paddingBottom: '1vh',
                        fontSize: 25
                      }}
                      for='exampleInputPassword1'
                    >
                      Email
                    </h3>
                    <input type='text' id='email' name='email' placeholder='Tu Email Aqui' class='form-control email' />
                  </div>
                  <div class='form-group'>
                    <h3
                      style={{
                        paddingBottom: '1vh',
                        fontSize: 25
                      }}
                      for='message'
                    >
                      Mensaje
                    </h3>
                    <textarea id='message' name='message' class='form-control message' rows='5' />
                  </div>
                  <button type='submit' class='btn btn-primary' onClick={this.handleSubmit}>
                    Enviar!
                  </button>
                </form>

                <div class='status' />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ContactPage
