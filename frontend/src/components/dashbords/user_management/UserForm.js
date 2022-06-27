import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../../store/actions/user.action';

const UserForm = () => {
  const dispatch = useDispatch();


	const history = useHistory();
  const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

  const onSubmit = (data) => {
		try {
			console.log('data', data);
			dispatch(addUser(data));
		} catch (error) {
			console.log('error', error);
		}
	};

	/* if (isAuthenticated) {
		console.log('auth', isAuthenticated);
		return <Redirect to="/dashboard" />;
	} */
  return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Col className="d-flex flex-column justify-content-between">
						<div className="form-group my-3">
							<label>
								<i className="fa mx-1 fa-solid fa-user"></i>Nom de Famille
							</label>
							<input
								name="lastName"
								type="text"
								{...register('lastName', { required: true })}
								className={`form-control ${
									errors.lastName ? 'is-invalid' : ''
								}`}
							/>
							<div className="invalid-feedback">{errors.lastName?.message}</div>
						</div>
						<div className="form-group my-3">
							<label>
								<i className="fa mx-1 fa-solid fa-user"></i>Nom
							</label>
							<input
								name="firstName"
								type="text"
								defaultValue=""
								{...register('firstName', { required: true })}
								className={`form-control ${
									errors.firstName ? 'is-invalid' : ''
								}`}
							/>
							<div className="invalid-feedback">
								{errors.firstName?.message}
							</div>
						</div>
						<div className="form-group my-3">
							<label>
								<i className="fa mx-1 fa-solid fa-building"></i>Société
							</label>
							<input
								name="company"
								type="company"
								{...register('company', { required: true })}
								className={`form-control ${errors.company ? 'is-invalid' : ''}`}
							/>
							<div className="invalid-feedback">{errors.company?.message}</div>
						</div>
					</Col>
					<Col>
						<div className="form-group my-3">
							<label>
								<i className="fa mx-1 fa-solid fa-envelope"></i>Adresse Email
							</label>
							<input
								name="email"
								type="email"
								{...register('email', { required: true })}
								className={`form-control ${errors.email ? 'is-invalid' : ''}`}
							/>
							<div className="invalid-feedback">{errors.email?.message}</div>
						</div>

						<div className="form-group" style={{ marginTop: '9%' }}>
							<label>
								<i className="fa mx-1 fa-solid fa-lock"></i>Mot de Passe
							</label>
							<input
								name="password"
								type="password"
								{...register('password', { required: true })}
								className={`form-control ${
									errors.password ? 'is-invalid' : ''
								}`}
							/>
							<div className="invalid-feedback">{errors.password?.message}</div>
						</div>
						<div className="form-group" style={{ marginTop: '6.5%' }}>
							<label>
								<i className="fa mx-1 fa-solid fa-user-check"></i>Type
								d'Utilisateur
							</label>
							<select
								name="userType"
								type="select"
								{...register('userType', { required: true })}
								className={`form-control ${
									errors.userType ? 'is-invalid' : ''
								}`}
							>
								<option value="">
									--Veuillez choisir un type d'utilisateur--
								</option>
								<option value="CLIENT">Client</option>
								<option value="RESP_VENTE">Responsable du vente</option>
								<option value="RESP_STOCK">Responsable du stock</option>
								<option value="RESP_REGLEMENT">Responsable du règlement</option>
							</select>
							<div className="invalid-feedback">{errors.userType?.message}</div>
						</div>
					</Col>
					<Row>
						<Col></Col>
						<Col>
							<div className="form-group d-flex justify-content-end">
								<div className="my-4">
									<button
										type="button"
										onClick={() => history.goBack}
										className="btn btn-primary btn-sm float-right mx-1"
									>
										<i className="fa mx-2 fa-solid fa-arrow-left"></i>Retour
									</button>
									<button type="submit" className="btn btn-success btn-sm mx-2">
										<i className="fa mx-2 fa-solid fa-check"></i>Valider
									</button>
								</div>
							</div>
						</Col>
					</Row>
				</Row>
			</form>
		</div>
	);
}

export default UserForm