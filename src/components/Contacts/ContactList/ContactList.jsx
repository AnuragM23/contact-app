import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPen,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

function ContactList() {
  const [state, setState] = useState({
    loading: false,
    contacts: [],
    ErrorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getAllContacts();

      setState({
        ...state,
        loading: false,
        contacts: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        contacts: error.message,
      });
    }
  }, []);

  let { loading, contacts, errorMessage } = state;

  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bolder">
                  Contact List
                  <Link to={"/contacts/add"} className="btn btn-primary mx-2">
                    {" "}
                    <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
                    Add New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat tempore rerum corporis laborum officia! Qui fugit unde
                  et ipsa eligendi suscipit tempora optio officiis. Ad voluptate
                  rerum est consectetur officia.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card my-2">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="https://imgs.search.brave.com/q30mtGI6Uq8L1sU9H02hXDiETyRoSxEtuLtXNNmTvSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24teW91bmct/dXNlci1pY29uLTI0/MDAucG5n"
                        alt=""
                        className="contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          {" "}
                          Name : <span className="fw-bold">Rajan</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          {" "}
                          Mobile :{" "}
                          <span className="fw-bold">+91 9999999999</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          {" "}
                          Email :{" "}
                          <span className="fw-bold">rajan@dummy.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center gap-2">
                      <Link
                        to={`/contacts/view/:contactId`}
                        className="btn btn-warning"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <Link
                        to={`/contacts/edit/:contactId`}
                        className="btn btn-primary"
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </Link>
                      <button className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {loading ? (
        <Spinner />
      ) : (
        <section className="contact-list">
          <div className="container">
            <div className="row">
              {contacts.length > 0 &&
                contacts.map((contact) => {
                  return (
                    <div className="col-md-6" key={contact.id}>
                      <div className="card my-2 mx-2">
                        <div className="card-body">
                          <div className="row align-items-center d-flex justify-content-around">
                            <div className="col-md-4">
                              <img
                                src={contact.photo} 
                                alt=""
                                className="contact-img"
                              />
                            </div>
                            <div className="col-md-7">
                              <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                  {" "}
                                  Name : <span className="fw-bold">{contact.name}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                  {" "}
                                  Mobile :{" "}
                                  <span className="fw-bold">
                                    {contact.mobile}
                                  </span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                  {" "}
                                  Email :{" "}
                                  <span className="fw-bold">
                                    {contact.email}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-1 d-flex flex-column align-items-center gap-2">
                              <Link
                                to={`/contacts/view/${contact.id}`}
                                className="btn btn-warning"
                              >
                                <FontAwesomeIcon icon={faEye} />
                              </Link>
                              <Link
                                to={`/contacts/edit/:contactId`}
                                className="btn btn-primary"
                              >
                                <FontAwesomeIcon icon={faPen} />
                              </Link>
                              <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ContactList;
