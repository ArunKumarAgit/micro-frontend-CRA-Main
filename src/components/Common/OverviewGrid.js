// not in use
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

function OverviewGrid(props) {
  console.log(props);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://bgc-project-5273b-default-rtdb.firebaseio.com/.json")
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);
  let data = userData.filter(obj => {
    let filteredData =
      (obj.name ? obj.name.trim().toLowerCase() : "") +
      "\0" +
      (obj.emailId ? obj.emailId.trim().toLowerCase() : "") +
      "\0" +
      (obj.phone ? obj.phone : "") +
      "\0" +
      (obj.companyName ? obj.companyName.trim().toLowerCase() : "") +
      (obj.bgcStatus ? obj.bgcStatus.trim().toLowerCase() : "");

    return (
      filteredData.indexOf(props.parent.searchValue.trim().toLowerCase()) !== -1
    );
  });
  console.log(data);
  const TablePagination = () => {
    const dataRow = data.map(object => {
      return (
        <Table.Row key={object.id}>
          {
            <Table.Cell>
              <Link to="/reqDetailComp">{object.name}</Link>
            </Table.Cell>
          }

          <Table.Cell>{object.emailId}</Table.Cell>
          <Table.Cell>{object.phone}</Table.Cell>
          <Table.Cell>{object.companyName}</Table.Cell>
          <Table.Cell>{object.bgcStatus}</Table.Cell>
          <Table.Cell>
            <input type="checkbox" readonly="" />
          </Table.Cell>
        </Table.Row>
      );
    });
    return (
      <Table sortable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email Id</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>status</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{dataRow}</Table.Body>
      </Table>
    );
  };

  return (
    <div className="">
      <TablePagination />
    </div>
  );
}

export default OverviewGrid;
