import * as React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './auth.css';
import Input from './Input';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/actions/auth.action';

export default function Register() {
	const dispatch = useDispatch()
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

  const onSubmit = (data) => {
		console.log(data)
	};

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
							//value={null}
							name="lastName"
							{...register('lastName', { required: true })}
						/>
{/* 						{errors.lastName && <p className="text-danger">يجب تعمير الخانة</p>}
 */}						<Input
							type="text"
							placeholder="Nom"
							icon="user"
							//value={null}
							name="firstName"
							{...register('firstName', { required: true })}
						/>
					{/* 	{errors.firstName && (
							<p className="text-danger">يجب تعمير الخانة</p>
						)} */}
						<Input
							type="text"
							placeholder="Société"
							icon="building-columns"
							//value={null}
							name="company"
							{...register('company', { required: true })}
						/>
{/* 						{errors.company && <p className="text-danger">يجب تعمير الخانة</p>}
 */}					</Col>
					<Col>
						<Input
							type="email"
							placeholder="Adresse E-mail"
							icon="envelope"
							//value={null}
							name="email"
							{...register('email', { required: true })}
						/>
{/* 						{errors.email && <p className="text-danger">يجب تعمير الخانة</p>}
 */}						<Input
							type="password"
							placeholder="Mot de Passe"
							icon="lock"
							//value={null}
							name="password"
							{...register('password', { required: true })}
						/>
{/* 						{errors.email && <p className="text-danger">يجب تعمير الخانة</p>}
 */}					</Col>
				</Row>
				<Row>
					<Col></Col>
					<Col className="d-flex justify-content-center px-3">
					{/* 	<Button className="cnxbtn">Retour</Button> */}
						<Button className="cnxbtn mx-3" type="submit">
							Valider
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}
