import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ViewContact() {

  let { contactId } = useParams();

  const [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: ""
  });

  useEffect(async () => {
    try {
      let response = await ContactService.getContact(contactId);
    } catch (error) {
      
    }
  }, [contactId])
  
 
  return (
    <>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                expedita non ducimus, labore odit, necessitatibus esse quidem id
                quo minima perspiciatis, quia error cupiditate modi aut sit
                tempora molestias omnis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://imgs.search.brave.com/q30mtGI6Uq8L1sU9H02hXDiETyRoSxEtuLtXNNmTvSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24teW91bmct/dXNlci1pY29uLTI0/MDAucG5n"
                alt=""
                className="img-fluid contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  {" "}
                  Name : <span className="fw-bold">Rajan</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  Mobile : <span className="fw-bold">+91 9999999999</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  Email : <span className="fw-bold">rajan@dummy.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  Company : <span className="fw-bold">rajan@dummy.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  Title : <span className="fw-bold">rajan@dummy.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  Group : <span className="fw-bold">rajan@dummy.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning btn-lg">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewContact;
