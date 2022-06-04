import React, { Fragment } from "react";
import { Table } from "react-bootstrap";

const StatsTable = () => {
  return (
    <Fragment>
      <Table responsive>
        <thead>
          <tr>
           <th># Articles</th>
           <th># Clients</th>
           <th># Responsables de vente</th>
           <th># Responsables des stocks</th>
           <th># Responsables de reglement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           100
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default StatsTable;
