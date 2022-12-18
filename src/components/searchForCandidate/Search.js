import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Button } from "semantic-ui-react";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = searchData => {
    setSearch(searchData);
  };
  const getDetails = _ => {
    if (search !== "") {
      onSearchChange(search);

      setSearch("");
    }
  };

  const loadOptions = inputValue => {
    return fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`
    )
      .then(res => res.json())
      .then(data => {
        return {
          options: data.map(names => {
            return {
              phone: 23134343,
              name: "Arun",
              companyName: "ABC Bank",
              emailId: names.email,
              bgcStatus: "In Progress",
              value: names.id,
              label: names.email,
            };
          }),
        };
      });
  };

  return (
    <div style={{ marginRight: "40%" }}>
      <div
        style={{
          width: "70%",
          display: "inline-block",
          marginRight: "10px",
          marginLeft: "-50%",
        }}
        className="container"
      >
        <AsyncPaginate
          placeholder="search by names..."
          debounceTimeout={500}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <Button onClick={getDetails} primary>
          submit
        </Button>
      </div>
    </div>
  );
};

export default Search;
