import React, { Fragment } from 'react'
import { Modal, Button, Form, Col, Row, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const LoginModal = ({ show, onHide, onSubmit, ...props }) => {
  return (
    <Fragment>
      <Modal show={show} onHide={onHide} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Se connecter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>Adresse Email:</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>Mot De Passe:</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>
            Annuler
          </Button>
          <Button variant='success' onClick={onSubmit}>
            Connexion
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default LoginModal
