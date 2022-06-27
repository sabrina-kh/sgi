import React, { Fragment, useEffect, useId, useState } from 'react'
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink
} from 'mdb-react-ui-kit'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteArticle,
  deleteUser,
  getArticle,
  getArticleList
} from '../../../store/actions/article.action'
import moment from 'moment'
import UserForm from '../user_management/UserForm'
import UserFormUpdate from '../user_management/UserFormUpdate'
import ArticleForm from './ArticleForm'

export default function ArticleList () {
  const articleId = useId()

  const dispatch = useDispatch()
  const articleList = useSelector(({ Article }) => Article.articleList)
  const articleData = useSelector(({ Article }) => Article.articleData)

  useEffect(() => {
    dispatch(getArticleList())
  }, [dispatch])

  const [addArticleModal, setAddArticleModal] = useState(false)

  const [articleModal, setArticleModal] = useState(false)
  const retrieveArticleData = el => {
    dispatch(getArticle(el))
    setArticleModal(true)
  }
  const handleDeleteArticle = el => {
    setArticleModal(false)
    dispatch(deleteArticle(el))
  }

  const [updateModal, setUpdateModal] = useState(false)
  const handleUpdate = articleId => {
    setUpdateModal(true)
    dispatch(getArticle(articleId))
  }

  return (
    <div className='px-5 py-5'>
      <Card
        style={{
          backgroundColor: 'white',
          margin: '5% 0 0',
          padding: '5% 5% 0',
          height: '100vh',
          zIndex: 10
        }}
      >
        <Row>
          <Col></Col>
          <Col className='d-flex justify-content-end py-5'>
            <Button size="sm" onClick={() => setAddArticleModal(true)}>Ajouter Un Article</Button>
          </Col>
        </Row>
        <Row>
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col' colSpan={2}>
                  Désignation
                </th>
                <th scope='col'>Prix Total (DT)</th>
                <th scope='col'>Quantité</th>
                <th scope='col'>Date d'Entrée</th>
                <th scope='col'></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {articleList && articleList?.length > 0 ? (
                articleList?.map(el => (
                  <Fragment>
                    <tr>
                      <th scope='row'>{el.code}</th>
                      <td
                        onClick={() => retrieveArticleData(el._id)}
                        style={{ cursor: 'pointer' }}
                        colSpan={2}
                      >
                        {el?.designation}
                      </td>
                      <td
                        onClick={() => retrieveArticleData(el._id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {el?.prix}
                      </td>
                      <td
                        onClick={() => retrieveArticleData(el._id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {el?.quantity}
                      </td>
                      <td
                        onClick={() => retrieveArticleData(el._id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {moment(el?.createdAt).format('DD/MM/YYYY')}
                      </td>
                      <td>
                        <Button
                          variant='outline-danger'
                          className='mx-2'
                          size='sm'
                          onClick={() => handleDeleteArticle(el._id)}
                        >
                          <i className='fa fa-solid fa-trash'></i>
                        </Button>
                        <Button
                          variant='outline-link'
                          className='mx-2'
                          size='sm'
                          onClick={() => handleUpdate(el._id)}
                        >
                          <i className='fa fa-solid fa-pen'></i>
                        </Button>
                      </td>
                    </tr>
                  </Fragment>
                ))
              ) : (
                <span>Aucun article n'est trouvé</span>
              )}
            </MDBTableBody>
          </MDBTable>
        </Row>
      

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
      </Card>

      {/* Modal des données */}
      <Modal show={articleModal} size='lg'>
        <Modal.Header>
          <Modal.Title>{`Données spécifiques du article ${
            articleData ? articleData?.firstName : null
          } ${articleData ? articleData?.lastName : null}`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <Row className='my-3'>
              <Col>
                <h6>Code de l'article:</h6>
                <small>{articleData && articleData?.code}</small>
              </Col>
              <Col>
                <h6>Désignation:</h6>
                <small>
                  {articleData && articleData?.designation?.toUpperCase()}
                </small>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col>
                <h6>Température:</h6>
                <small>{articleData && articleData?.company}</small>
              </Col>
              <Col>
                <h6>Densité:</h6>
                <small>{articleData && articleData?.email}</small>
              </Col>
            </Row>
            <Row className='my-1'>
              <Col>
                <h6>TAV:</h6>
                <small>{articleData && articleData?.company}</small>
              </Col>
              <Col>
                <h6>Degré d'enfencement:</h6>
                <small>{articleData && articleData?.email}</small>
              </Col>
            </Row>
            <Row className='my-'>
              <Col>
                <h6>Coefficient:</h6>
                <small>{articleData && articleData?.company}</small>
              </Col>
              <Col>
                <h6>Quantité:</h6>
                <small>{articleData && articleData?.email}</small>
              </Col>
            </Row>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={() => setArticleModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Modification */}
      <Modal show={updateModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modifier les données de l'article</Modal.Title>
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

      {/* Modal d'ajout d'article */}
      <Modal show={addArticleModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau article</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ArticleForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={() => setAddArticleModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
