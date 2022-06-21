import * as React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './auth.css';
import Input from './Input';
import { useForm } from 'react-hook-form';

export default function Register() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

  const onSubmit = (data) => console.log(data);

  const [formData, setFormData] = React.useState({
    lastName: '',
    firstName: '',
    company: '',
    email: '',
    password: ''
  })

  const { lastName, firstName, company, email, password } = formData;

	return (
		<Container fluid>
			<Row className="justify-content-center align-items-center py-3 title">
				Créer Compte Admin
			</Row>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row className="justify-content-between">
					<Col>
						<Input
							type="text"
							placeholder="Nom de famille"
							icon="user"
							value={null}
							name="lastName"
							{...register('lastName', { required: true })}
						/>
						{errors.lastName?.type === 'required' && 'last name is required'}
						<Input
							type="text"
							placeholder="Nom"
							icon="user"
							value={null}
							name="firstName"
						/>
						<Input
							type="text"
							placeholder="Société"
							icon="building-columns"
							value={null}
							name="company"
						/>
					</Col>
					<Col>
						<Input
							type="email"
							placeholder="Adresse E-mail"
							icon="envelope"
							value={null}
							name="lastName"
						/>
						<Input
							type="password"
							placeholder="Mot de Passe"
							icon="lock"
							value={null}
							name="lastName"
						/>
					</Col>
				</Row>
				<Row>
					<Col></Col>
					<Col className="d-flex justify-content-center px-3">
						<Button className="cnxbtn">Retour</Button>
						<Button className="cnxbtn mx-3" type='submit'>Valider</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}
