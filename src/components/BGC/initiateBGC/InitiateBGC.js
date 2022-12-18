import useForceUpdate from "use-force-update";
import { toast, ToastContainer } from "react-toastify";
import { Button, Dropdown, Icon, Table } from "semantic-ui-react";
import Preview from "./Preview";
import Search from "../../searchForCandidate/Search";
import { useState } from "react";
const IntiateBGC = () => {
  const options = [
    { key: "dentity", text: "dentity", value: "dentity" },
    { key: "Education", text: "Education", value: "Education" },
    { key: "Experience", text: "Experience", value: "Experience" },
    { key: "Civil", text: "Civil", value: "Civil" },
    { key: "Credit", text: "Credit", value: "Credit" },
  ];

  const [setdrop] = useState();
  const [addCandidateDataForTable, setAddCandidateDataForTable] = useState([]);
  const [states] = useState({ options });
  const forceUpdate = useForceUpdate();
  const { currentValues } = states;
  let a = 0;

  const handleOnSearchChange = async searchData => {
    setAddCandidateDataForTable(prev => {
      return [...prev, searchData];
    });
  };

  const deleteUser = key => {
    console.log(key);
    addCandidateDataForTable.splice(key, 1);
    toast("candidate deleted", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    forceUpdate();
  };
  let postdata = async () => {
    if (addCandidateDataForTable.length > 0) {
      addCandidateDataForTable.map(async data => {
        await fetch("http://localhost:3004/candidateData", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log(data);

        setAddCandidateDataForTable([]);
      });
      toast("Request Sent");
    } else {
      toast("Please add candidate");
    }
  };

  const dropValues = (key, value) => {
    setdrop(value.value);
  };

  return (
    <>
      <ToastContainer />
      <div className="ui segment form">
        <div className="ui small segment form">
          <div className="ui mini fields">
            <div className="ui eight wide field" />
            <div className="ui eight wide field">
              <Search onSearchChange={handleOnSearchChange} />
            </div>
          </div>
        </div>
        <div className="ui mini fields">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First name</Table.HeaderCell>
                <Table.HeaderCell>last name</Table.HeaderCell>
                <Table.HeaderCell>Employee id</Table.HeaderCell>
                <Table.HeaderCell>Phone no</Table.HeaderCell>
                <Table.HeaderCell>Required details</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {addCandidateDataForTable.map((candidateData, key) => {
                return (
                  <Table.Row key={key}>
                    <Table.Cell>{candidateData.value}</Table.Cell>
                    <Table.Cell>{candidateData.label}</Table.Cell>
                    <Table.Cell>
                      {(() => {
                        a++;
                        return a;
                      })()}
                    </Table.Cell>
                    <Table.Cell>673-32-22323</Table.Cell>

                    <Table.Cell>
                      <Dropdown
                        options={options}
                        placeholder="Choose"
                        search
                        selection
                        fluid
                        multiple
                        allowAdditions
                        value={currentValues}
                        onChange={dropValues}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => {
                          deleteUser(key);
                        }}
                        style={{ float: "right" }}
                        color="red"
                        content="Delete"
                        icon="user delete"
                        labelPosition="left"
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>

        <div className="ui segment form">
          <Button onClick={postdata} primary style={{ marginLeft: "47%" }}>
            <Icon name="send"></Icon>
            submit
          </Button>
          <div style={{ float: "right" }} className="ui mini fields">
            <div>{<Preview></Preview>}</div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default IntiateBGC;
