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
  deleteRespVente,
  deleteUser,
  getRespVenteData,
  getRespVenteList,
} from '../../../store/actions/user.action'
import moment from 'moment'
import UserForm from './UserForm'
import UserFormUpdate from './UserFormUpdate'

export default function RespVenteList () {
  const respVenteId = useId()

  const dispatch = useDispatch()
  const respVenteList = useSelector(({ User }) => User.respVenteList)
  const respVenteData = useSelector(({ User }) => User.respVenteData)

  useEffect(() => {
    dispatch(getRespVenteList())
  }, [dispatch])

  const [respVenteModal, setRespVenteModal] = useState(false)
  const retrieveRespVenteData = el => {
    dispatch(getRespVenteData(el))
    setRespVenteModal(true)
  }
  const handleDeleteRespVente = el => {
    setRespVenteModal(false)
    dispatch(deleteRespVente(el))
  }

  const [updateModal, setUpdateModal] = useState(false)
	const handleUpdate = (respVenteId) => {
		setUpdateModal(true)
		dispatch(getRespVenteData(respVenteId))
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
          {respVenteList && respVenteList?.length > 0 ? (
            respVenteList?.map(el => (
              <Fragment>
                <tr>
                  <th scope='row'>
                    {respVenteId
                      ?.toString()
                      .replace(':r', '')
                      .replace(':', '')}
                  </th>
                  <td
                    onClick={() => retrieveRespVenteData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {el?.lastName}
                  </td>
                  <td
                    onClick={() => retrieveRespVenteData(el._id)}
                    style={{ cursor: 'pointer' }}
                    colSpan={2}
                  >
                    {el?.firstName}
                  </td>
                  <td
                    onClick={() => retrieveRespVenteData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {el?.company}
                  </td>
                  <td
                    onClick={() => retrieveRespVenteData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {moment(el?.createdAt).format('DD/MM/YYYY')}
                  </td>
                  <td>
                    <Button
                      variant='outline-danger'
                      className='mx-2'
                      size='sm'
                      onClick={() => handleDeleteRespVente(el._id)}
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
            <span>Aucun respVente n'est trouvé</span>
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
      <Modal show={respVenteModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{`Données spécifiques du respVente ${
            respVenteData ? respVenteData?.firstName : null
          } ${respVenteData ? respVenteData?.lastName : null}`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <Row className='my-3'>
              <Col>
                <h6>Nom de Famille:</h6>
                <small>{respVenteData && respVenteData?.lastName}</small>
              </Col>
              <Col>
                <h6>Prénom:</h6>
                <small>{respVenteData && respVenteData?.firstName}</small>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col>
                <h6>Affiliation:</h6>
                <small>{respVenteData && respVenteData?.company}</small>
              </Col>
              <Col>
                <h6>Email de Connexion:</h6>
                <small>{respVenteData && respVenteData?.email}</small>
              </Col>
            </Row>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={() => setRespVenteModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Modification */}
      <Modal show={updateModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modifier les données du respVente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <UserFormUpdate />
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
