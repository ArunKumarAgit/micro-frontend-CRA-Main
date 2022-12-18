import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Select } from "semantic-ui-react";
import Tables from "../table/Table";
// import OverviewGrid from "../Common/OverviewGrid";

const statusOptions = [
  {
    key: "All",
    text: "All",
    value: "All",
  },
  {
    key: "In Progress",
    text: "In Progress",
    value: "In Progress",
  },
  {
    key: "Completed",
    text: "Completed",
    value: "Completed",
  },

  {
    key: "Failed",
    text: "Failed",
    value: "Failed",
  },
];

function BGCComponent() {
  const [searchFilter, setSearchFilter] = useState("");
  const navigate = useNavigate();
  const addBGCComponent = e => {
    e.preventDefault();
    navigate("/bgc/reqDetailComp/addbgc");
  };
  let status = e => {
    e.target.innerText === "All"
      ? setSearchFilter("")
      : setSearchFilter(e.target.innerText);
  };

  return (
    <div className={classNames(" ui raised segment center_element")}>
      <div className="ui small segment form">
        <div className="ui mini fields">
          <div className="ui eight wide field" />
          <div className="ui eight wide field">
            <Input
              icon="search"
              focus
              name="searchFilter"
              // value={searchFilter}
              placeholder="Search.."
              onChange={e => setSearchFilter(e.target.value)}
            />
          </div>
          <div className="ui eight wide field" style={{ textAlign: "right" }}>
            <button className="ui primary button" onClick={addBGCComponent}>
              Initiate BGC
            </button>
          </div>
        </div>
      </div>

      <div className="ui segment form">
        <div className="ui mini fields">
          <div className="ui eight wide field">
            <div className="ui small form">
              <Select
                style={{
                  border: "2px solid black",
                  height: "10px",

                  width: "300px",
                }}
                placeholder="Track By status"
                options={statusOptions}
                onChange={status}
              />
            </div>
          </div>
          <div className="ui sixteen wide field" />
        </div>
        <div className="ui basic segment center aligned"></div>
        {/* <OverviewGrid
          parent={{
            name: "BGC",
            searchValue: searchFilter,
          }}
        /> */}
        <Tables
          parent={{
            name: "BGC",
            searchValue: searchFilter,
          }}
        />
      </div>
    </div>
  );
}

export default BGCComponent;
