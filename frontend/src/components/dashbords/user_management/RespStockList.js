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
  deleteRespStock,
  deleteUser,
  getRespStockData,
  getRespStockList,
} from '../../../store/actions/user.action'
import moment from 'moment'
import UserForm from './UserForm'
import UserFormUpdate from './UserFormUpdate'

export default function RespStockList () {
  const respStockId = useId()

  const dispatch = useDispatch()
  const respStockList = useSelector(({ User }) => User.respStockList)
  const respStockData = useSelector(({ User }) => User.respStockData)

  useEffect(() => {
    dispatch(getRespStockList())
  }, [dispatch])

  const [respStockModal, setRespStockModal] = useState(false)
  const retrieveRespStockData = el => {
    dispatch(getRespStockData(el))
    setRespStockModal(true)
  }
  const handleDeleteRespStock = el => {
    setRespStockModal(false)
    dispatch(deleteRespStock(el))
  }

  const [updateModal, setUpdateModal] = useState(false)
	const handleUpdate = (respStockId) => {
		setUpdateModal(true)
		dispatch(getRespStockData(respStockId))
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
          {respStockList && respStockList?.length > 0 ? (
            respStockList?.map(el => (
              <Fragment>
                <tr>
                  <th scope='row'>
                    {respStockId
                      ?.toString()
                      .replace(':r', '')
                      .replace(':', '')}
                  </th>
                  <td
                    onClick={() => retrieveRespStockData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {el?.lastName}
                  </td>
                  <td
                    onClick={() => retrieveRespStockData(el._id)}
                    style={{ cursor: 'pointer' }}
                    colSpan={2}
                  >
                    {el?.firstName}
                  </td>
                  <td
                    onClick={() => retrieveRespStockData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {el?.company}
                  </td>
                  <td
                    onClick={() => retrieveRespStockData(el._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {moment(el?.createdAt).format('DD/MM/YYYY')}
                  </td>
                  <td>
                    <Button
                      variant='outline-danger'
                      className='mx-2'
                      size='sm'
                      onClick={() => handleDeleteRespStock(el._id)}
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
            <span>Aucun respStock n'est trouvé</span>
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
      <Modal show={respStockModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{`Données spécifiques du respStock ${
            respStockData ? respStockData?.firstName : null
          } ${respStockData ? respStockData?.lastName : null}`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <Row className='my-3'>
              <Col>
                <h6>Nom de Famille:</h6>
                <small>{respStockData && respStockData?.lastName}</small>
              </Col>
              <Col>
                <h6>Prénom:</h6>
                <small>{respStockData && respStockData?.firstName}</small>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col>
                <h6>Affiliation:</h6>
                <small>{respStockData && respStockData?.company}</small>
              </Col>
              <Col>
                <h6>Email de Connexion:</h6>
                <small>{respStockData && respStockData?.email}</small>
              </Col>
            </Row>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={() => setRespStockModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Modification */}
      <Modal show={updateModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modifier les données du respStock</Modal.Title>
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
