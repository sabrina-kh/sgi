import React, { Fragment } from 'react';
import {
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBPagination,
	MDBPaginationItem,
	MDBPaginationLink,
} from 'mdb-react-ui-kit';

export default function App() {
	return (
		<Fragment>
			<MDBTable>
				<MDBTableHead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nom</th>
						<th scope="col" colSpan={2}>
							Prénom
						</th>
						<th scope="col">Société</th>
						<th scope="col">Date</th>
						<th scope="col">N° Commandes</th>
					</tr>
				</MDBTableHead>
				<MDBTableBody>
					<tr>
						<th scope="row">1</th>
						<td>Boudagga</td>
						<td colSpan={2}>Med Amine</td>
						<td>HalberIO</td>
						<td>12/05/2022</td>
						<td>5</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Khlifa</td>
						<td colSpan={2}>Sabrina</td>
						<td>ArabSoft</td>
						<td>01/06/2022</td>
						<td>12</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Mbarki</td>
						<td colSpan={2}>Amal</td>
						<td>ArabSoft</td>
						<td>03/06/2022</td>
						<td>3</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>Touil</td>
						<td colSpan={2}>Hamdi</td>
						<td>Aziza</td>
						<td>13/06/2022</td>
						<td>3</td>
					</tr>
					<tr>
						<th scope="row">5</th>
						<td>Mbarki</td>
						<td colSpan={2}>Amal</td>
						<td>Isima</td>
						<td>23/06/2022</td>
						<td>3</td>
					</tr>
					<tr>
						<th scope="row">6</th>
						<td>Boudagga</td>
						<td colSpan={2}>Med Amine</td>
						<td>HalberIO</td>
						<td>12/05/2022</td>
						<td>5</td>
					</tr>
					<tr>
						<th scope="row">7</th>
						<td>Khlifa</td>
						<td colSpan={2}>Sabrina</td>
						<td>ArabSoft</td>
						<td>01/06/2022</td>
						<td>12</td>
					</tr>
				</MDBTableBody>
			</MDBTable>
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
		</Fragment>
	);
}
