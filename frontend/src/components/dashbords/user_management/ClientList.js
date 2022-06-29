import React, { Fragment, useEffect, useId, useState } from 'react'
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink
} from 'mdb-react-ui-kit'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteClient,
  deleteUser,
  getClientData,
  getClientList
} from '../../../store/actions/user.action'
import moment from 'moment'
import UserForm from './UserForm'
import UserFormUpdate from './UserFormUpdate'

export default function ClientList () {
  const clientId = useId()

  const dispatch = useDispatch()
  const clientList = useSelector(({ User }) => User.clientList)
  const clientData = useSelector(({ User }) => User.clientData)

  useEffect(() => {
    dispatch(getClientList())
  }, [dispatch])

  const [clientModal, setClientModal] = useState(false)
  const retrieveClientData = el => {
    dispatch(getClientData(el))
    setClientModal(true)
  }
  const handleDeleteClient = el => {
    setClientModal(false)
    dispatch(deleteClient(el))
  }

  const [updateModal, setUpdateModal] = useState(false)
	const handleUpdate = (clientId) => {
		setUpdateModal(true)
		dispatch(getClientData(clientId))
	}

  return (
    <Fragment>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nom</th>
            <th scope='col' colSpan={2}>
              Prénom
            </th>
            <th scope='col'>Société</th>
            <th scope='col'>Date</th>
            <th scope='col'></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {clientList && clientList?.length > 0 ? (
            clientList?.map(el => (
              <Fragment>
                <tr>
                  <th scope='row'>
                    {clientId
                      ?.toString()
                      .replace(':r', '')
                      .replace(':', '')}
                  </th>
                  <td
                    onClick={() => retrieveClientData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {el?.lastName}
                  </td>
                  <td
                    onClick={() => retrieveClientData(el._id)}
                    style={{ cursor: 'pointer' }}
                    colSpan={2}
                  >
                    {el?.firstName}
                  </td>
                  <td
                    onClick={() => retrieveClientData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {el?.company}
                  </td>
                  <td
                    onClick={() => retrieveClientData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {moment(el?.createdAt).format('DD/MM/YYYY')}
                  </td>
                  <td>
                    <Button
                      variant='outline-danger'
                      className='mx-2'
                      size='sm'
                      onClick={() => handleDeleteClient(el._id)}
                    >
                      <i className='fa fa-solid fa-trash'></i>
                    </Button>
                    <Button variant='outline-link' className='mx-2' size='sm' onClick={() => handleUpdate(el._id)}>
                      <i className='fa fa-solid fa-pen'></i>
                    </Button>
                  </td>
                </tr>
              </Fragment>
            ))
          ) : (
            <span>Aucun client n'est trouvé</span>
          )}
        </MDBTableBody>
      </MDBTable>

      {/* Pagination */}
      <nav aria-label='Page navigation example'>
        <MDBPagination className='mb-0'>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>{'<'}</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>2</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>{'>'}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </nav>

      {/* Modal des données */}
      <Modal show={clientModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{`Données spécifiques du client ${
            clientData ? clientData?.firstName : null
          } ${clientData ? clientData?.lastName : null}`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <Row className='my-3'>
              <Col>
                <h6>Nom de Famille:</h6>
                <small>{clientData && clientData?.lastName}</small>
              </Col>
              <Col>
                <h6>Prénom:</h6>
                <small>{clientData && clientData?.firstName}</small>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col>
                <h6>Affiliation:</h6>
                <small>{clientData && clientData?.company}</small>
              </Col>
              <Col>
                <h6>Email de Connexion:</h6>
                <small>{clientData && clientData?.email}</small>
              </Col>
            </Row>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={() => setClientModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Modification */}
      <Modal show={updateModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modifier les données du client</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <UserFormUpdate userId={clientData?.user?.toString} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={() => setUpdateModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}
