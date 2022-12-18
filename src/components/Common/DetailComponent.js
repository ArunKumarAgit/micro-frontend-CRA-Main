import React, { useEffect, useState, useContext } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Dimmer, Image, Loader } from 'semantic-ui-react';
function DetailComponent(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="ui segment">
      <div>
        <div>
          <div style={{ display: loading ? 'block' : 'none' }}>
            <Dimmer active inverted>
              <Loader content="Getting Candidate details ......." />
            </Dimmer>
          </div>

          <div style={{ display: loading ? 'none' : 'block' }}></div>
        </div>
        <div className="ui blue inverted medium segment grid">
          <div className="row">
            <div className="eight wide column">
              <h1> Candidate details </h1>
            </div>
          </div>
        </div>
        <div className="ui two column grid">
          <div className="column">
            <div className="ui raised segment">
              <h5 className="ui red ribbon label"> Details</h5>
              <table width="80%">
                <tbody>
                  <tr>
                    <td width="40%"> First name </td>
                    <td>{props.name}</td>
                  </tr>
                  <tr>
                    <td width="40%">Last name</td>
                    <td>{props.name}</td>
                  </tr>
                  <tr>
                    <td width="40%">email</td>
                    <td>{props.requirmentDate}</td>
                  </tr>
                  <tr>
                    <td width="40%">phone number</td>
                    <td>{props.requirmenType}</td>
                  </tr>
                  <tr>
                    <td width="40%">company</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">id</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">bgc Status</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">Skill's</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">No of Experience</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">Location</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">City</td>
                    <td>{props.client}</td>
                  </tr>

                  <tr>
                    <td width="40%">Identity</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">civil</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">credit score</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">Status</td>
                    <td>{props.client}</td>
                  </tr>
                  <tr>
                    <td width="40%">UAN</td>
                    <td>{props.client}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="column">
            <div className="ui raised segment">
              <h5 className="ui green ribbon label">Profile</h5>
              <br></br>

              <br></br>
              <Dimmer active inverted>
                <Loader content="Getting Candidate picture ......." />
              </Dimmer>
              <Image
                src="https://picsum.photos/200/300"
                size="small"
                style={{ display: 'inline' }}
              />
              <br></br>
              <br></br>
            </div>
          </div>
        </div>

        <div className="ui raised segment">
          <span className="ui blue ribbon label">Contact </span>
          <table width="100%" className="table_bgcolor">
            <tbody>
              <tr width="50%">
                <td width="10%">Id</td>
                <td width="10%">Name</td>
                <td width="10%">Phone</td>
                <td width="10%">Email Id</td>
                <td width="10%">Status</td>
              </tr>
            </tbody>
          </table>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading className="accordion__title1">
                <AccordionItemButton>
                  <table width="100%">
                    <tbody>
                      <tr width="50%">
                        <td width="10%">1232412</td>
                        <td width="10%">Arun A</td>
                        <td width="10%">9872346234</td>
                        <td width="10%">abc@gmail.com</td>
                        <td width="10%">Active</td>
                      </tr>
                    </tbody>
                  </table>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>Details of Arun Kumar</div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
