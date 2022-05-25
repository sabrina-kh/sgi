import React, { Fragment } from 'react'
import { Modal, Button, Form, Col, Row, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const RegisterModal = ({ show, onHide, onSubmit, ...props }) => {
  return (
    <Fragment>
      <Modal show={show} onHide={onHide} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Créer un compte admin</Modal.Title>
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
                    <Form.Label>Nom de Famille:</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' />
                  </Form.Group>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>Société:</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>Prénom:</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
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
                    <Form.Label>Mot de Passe:</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' />
                    <small>Doit contenir entre 6 et 15 caractères</small>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>
            Fermer
          </Button>
          <Button variant='success' onClick={onSubmit}>
            valider
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default RegisterModal
