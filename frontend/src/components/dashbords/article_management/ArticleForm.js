import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addArticle } from '../../../store/actions/article.action'
import { addUser } from '../../../store/actions/user.action'

const ArticleForm = () => {
  const dispatch = useDispatch()

  const history = useHistory()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    try {
      console.log('data', data)
      dispatch(addArticle(data))
      console.log(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  /* if (isAuthenticated) {
		console.log('auth', isAuthenticated);
		return <Redirect to="/dashboard" />;
	} */
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col className='d-flex flex-column justify-content-between'>
            <div className='form-group my-3'>
              <label>Désignation</label>
              <input
                name='designation'
                type='text'
                {...register('designation', { required: true })}
                className={`form-control ${
                  errors.designation ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>{errors.designation?.message}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='form-group my-3'>
              <label>
                Degré d'Enfencement
              </label>
              <input
                name='degreEnfencement'
                type='number'
                {...register('degreEnfencement', { required: true })}
                className={`form-control ${errors.degreEnfencement ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.degreEnfencement?.message}</div>
            </div>
          </Col>
          <Col>
            <div className='form-group my-3'>
              <label>
               TAV
              </label>
              <input
                name='tav'
                type='number'
                {...register('tav', { required: true })}
                className={`form-control ${
                  errors.tav ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>{errors.tav?.message}</div>
            </div>
          </Col>
          <Col>
            <div className='form-group my-3'>
              <label>
                Température
              </label>
              <input
                name='temperature'
                type='number'
                {...register('temperature', { required: true })}
                className={`form-control ${errors.temperature ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.temperature?.message}</div>
            </div>
          </Col>
          <Col>
            <div className='form-group my-3'>
              <label>
                Densité
              </label>
              <input
                name='densite'
                type='number'
                {...register('densite', { required: true })}
                className={`form-control ${errors.densite ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.densite?.message}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='form-group my-3'>
              <label>
                Prix:
              </label>
              <input
                name='prix'
                type='number'
                {...register('prix', { required: true })}
                className={`form-control ${errors.prix ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.prix?.message}</div>
            </div>
          </Col>
          <Col>
            <div className='form-group my-3'>
              <label>
                Quantité:
              </label>
              <input
                name='quantity'
                type='number'
                {...register('quantity', { required: true })}
                className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.quantity?.message}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col></Col>
            <Col>
              <div className='form-group d-flex justify-content-end'>
                <div className='my-4'>
                  <button
                    type='button'
                    onClick={() => history.goBack}
                    className='btn btn-primary btn-sm float-right mx-1'
                  >
                    <i className='fa mx-2 fa-solid fa-arrow-left'></i>Retour
                  </button>
                  <button type='submit' className='btn btn-success btn-sm mx-2'>
                    <i className='fa mx-2 fa-solid fa-check'></i>Valider
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </form>
    </div>
  )
}

export default ArticleForm
