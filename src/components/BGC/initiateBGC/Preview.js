import React from "react";
import { Button, Modal, Icon, Dropdown } from "semantic-ui-react";
import styles from "./styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Preview(props) {
  const options = [
    { key: "dentity", text: "dentity", value: "dentity" },
    { key: "Identity", text: "Identity", value: "Identity" },
    { key: "Experience", text: "Experience", value: "Experience" },
    { key: "Civil", text: "Civil", value: "Civil" },
    { key: "Credit", text: "Credit", value: "Credit" },
  ];

  const [open, setOpen] = React.useState(false);
  const [states, setStates] = useState({ options });

  const { currentValues } = states;

  const setOpens = _ => {
    setOpen(false);
    setStates({});
    toast("Email Sent", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer />

      <div>
        <Modal
          centered={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={
            <Button primary>
              <Icon name="eye" />
              Preview
            </Button>
          }
        >
          <Modal.Header
            style={{
              backgroundColor: "transparent",
              color: "red",
              display: "inline",
            }}
          >
            Email
          </Modal.Header>

          <div className={styles.top}>
            <div>
              <Modal.Actions></Modal.Actions>
            </div>
          </div>
          <Modal.Content>
            <Modal.Description>
              {/* ------------------------------------------------ */}
              <Dropdown
                options={options}
                placeholder="Choose"
                search
                selection
                fluid
                multiple
                allowAdditions
                value={currentValues}
              />
              <br></br>
              <br></br>
              {/* -------------------------------------------------------------------- */}
              <textarea
                style={styles.textarea}
                placeholder="Reaquired Additional information"
                rows="20"
                name="comment[text]"
                id="comment_text"
                cols="40"
                className="ui-autocomplete-input"
                autoComplete="off"
                // role="textbox"
                aria-autocomplete="list"
                aria-haspopup="true"
              ></textarea>
              {/* ----------------------------------------------------------------- */}
            </Modal.Description>
          </Modal.Content>

          <div className={styles.email}>
            <Button.Group>
              <Button onClick={() => setOpen(false)}>
                <Icon name="undo" />
                cancel
              </Button>
              <Button.Or />
              {/* <Button onClick={notify} positive> */}
              <Button onClick={setOpens}>
                <Icon name="send" />
                send
              </Button>
            </Button.Group>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Preview;
