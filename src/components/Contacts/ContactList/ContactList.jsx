import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function ContactList() {
  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Contact List
                  <Link to={"/contact/add"} className="btn btn-primary mx-2">
                    {" "}
                    <FontAwesomeIcon icon={faPlusCircle} className="me-2"/>
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
                      <input type="text" className="form-control" placeholder="Search Names" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input type="submit" className="btn btn-outline-dark" value="Search"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactList;
