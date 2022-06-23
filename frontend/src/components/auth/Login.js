import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login, registerUser } from '../../store/actions/auth.action';

const Login = () => {
	const dispatch = useDispatch();

	const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

	const history = useHistory();
	const {
		setError,
		handleSubmit,
		register,
		control,
		reset,
		formState: { errors },
		getValues,
	} = useForm();

	const onSubmit = (data) => {
		try {
			console.log('data', data);
			dispatch(login(data));
		} catch (error) {
			console.log('error', error);
		}
	};

	if (isAuthenticated) {
		console.log('auth', isAuthenticated);
		return <Redirect to="/dashboard" />;
	}
	return (
		<div className="vh-100 px-5 py-5 container-fluid">
			<h4
				className="my-3 font-italic text-white"
				style={{ fontStyle: 'italic', fontFamily: ['Arial'] }}
			>
				Se Connecter
			</h4>
			<Card className="px-5 py-5 h-75">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Row className='px-5'>
						
						<Col>
							<div className="form-group my-1">
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

							<div className="form-group" style={{ marginBlock: '2%' }}>
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
								<div className="invalid-feedback">
									{errors.password?.message}
								</div>
							</div>
							<div className="form-group d-flex justify-content-end">
								<div className="my-1">
									<button
										type="button"
										onClick={history.goBack}
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
				</form>
			</Card>
		</div>
	);
};

export default Login;
