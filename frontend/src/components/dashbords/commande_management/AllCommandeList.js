import React, { Fragment, useEffect, useId, useState } from 'react';
import {
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBPagination,
	MDBPaginationItem,
	MDBPaginationLink,
} from 'mdb-react-ui-kit';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
	deleteClient,
	deleteUser,
	getClientData,
	getClientList,
} from '../../../store/actions/user.action';
import moment from 'moment';
//import UserForm from './UserForm';
//import UserFormUpdate from './UserFormUpdate';
import {
	deleteCommande,
	getCommande,
	getCommandeList,
} from '../../../store/actions/commande.action';

export default function AllCommandeList() {
	const dispatch = useDispatch();
	const commandeList = useSelector(({ Commande }) => Commande.commandeList);
	const commandeData = useSelector(({ Commande }) => Commande.commandeData);

	useEffect(() => {
		dispatch(getCommandeList());
	}, [dispatch]);

	const [commandeModal, setCommandeModal] = useState(false);
	const retrieveCommandeData = (el) => {
		dispatch(getCommande(el));
		setCommandeModal(true);
	};
	const handleCancelCommande = (el) => {
		setCommandeModal(false);
		dispatch(deleteCommande(el));
	};

	const [updateModal, setUpdateModal] = useState(false);

	return (
		<Fragment>
			<MDBTable>
				<MDBTableHead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nombre des futs</th>
						<th scope="col">Prix Total</th>
						<th scope="col">Etat</th>
						<th scope="col">Date</th>
						<th scope="col"></th>
					</tr>
				</MDBTableHead>
				<MDBTableBody>
					{commandeList && commandeList?.length > 0 ? (
						commandeList?.map((el) => (
							<Fragment>
								<tr>
									<th scope="row">{el.numCom}</th>
									<td
										onClick={() => retrieveCommandeData(el._id)}
										style={{ cursor: 'pointer' }}
									>
										{el?.nbFut}
									</td>
									<td
										onClick={() => retrieveCommandeData(el._id)}
										style={{ cursor: 'pointer' }}
									>
										<div className="custom-control custom-switch">
											<input
												type="checkbox"
												className="custom-control-input"
												id="customSwitchesChecked"
												defaultChecked={!el?.isPassed ? false : true}
											/>
											<label
												className="custom-control-label"
												htmlFor="customSwitchesChecked"
											>
												{el?.isPassed ? 'Validée' : 'En Attente'}
											</label>
										</div>
									</td>
									<td
										onClick={() => retrieveCommandeData(el._id)}
										style={{ cursor: 'pointer' }}
									>
										{moment(el?.createdAt).format('DD/MM/YYYY')}
									</td>
									<td>
										<Button
											variant="outline-danger"
											className="mx-2"
											size="sm"
											onClick={() => handleCancelCommande(el._id)}
										>
											<i className="fa fa-solid fa-xmark"></i>
										</Button>
									</td>
								</tr>
							</Fragment>
						))
					) : (
						<span>Aucune commande n'est trouvée</span>
					)}
				</MDBTableBody>
			</MDBTable>

			{/* Pagination */}
			<nav aria-label="Page navigation example">
				<MDBPagination className="mb-0">
					<MDBPaginationItem>
						<MDBPaginationLink href="#">{'<'}</MDBPaginationLink>
					</MDBPaginationItem>
					<MDBPaginationItem>
						<MDBPaginationLink href="#">1</MDBPaginationLink>
					</MDBPaginationItem>
					<MDBPaginationItem>
						<MDBPaginationLink href="#">2</MDBPaginationLink>
					</MDBPaginationItem>
					<MDBPaginationItem>
						<MDBPaginationLink href="#">3</MDBPaginationLink>
					</MDBPaginationItem>
					<MDBPaginationItem>
						<MDBPaginationLink href="#">{'>'}</MDBPaginationLink>
					</MDBPaginationItem>
				</MDBPagination>
			</nav>

			{/* Modal des données */}
			<Modal show={commandeModal} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>{`Données spécifiques de la commande ${
						commandeData ? commandeData?.numCom : null
					}`}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<Row className="my-3">
							<Col>
								<h6>Articles:</h6>
								{commandeData &&
									commandeData?.articles?.map((el) => (
										<Fragment>
											<small>{el?.designation}</small>
											<br />
										</Fragment>
									))}
							</Col>
							<Col>
								<h6>Livraison:</h6>
								<small>
									{commandeData && commandeData?.lieuDeLivraison} -{' '}
									{commandeData && commandeData?.modeLivraison}
								</small>
							</Col>
						</Row>
						<Row className="my-3">
							<Col>
								<h6>Nombre des Futs:</h6>
								<small>{commandeData?.nbFut}</small>
							</Col>
							<Col>
								<h6>Volume:</h6>
								<small>{commandeData?.volume} L </small>
							</Col>
						</Row>
						<Row className="my-3">
							<Col>
								<h6>Prix Hors Taxes:</h6>
								<small>{commandeData?.prixHT} DT</small>
							</Col>
							<Col>
								<h6>Taux de Remise:</h6>
								<small>{commandeData?.remise}%</small>
							</Col>
							<Col>
								<h6>Prix Total:</h6>
								<small>{commandeData?.prixTOT} DT</small>
							</Col>
						</Row>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="danger" onClick={() => setCommandeModal(false)}>
						Fermer
					</Button>
				</Modal.Footer>
			</Modal>

		</Fragment>
	);
}
