import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

function EditContact() {
  let { contactId } = useParams();
  let navigate = useNavigate();
  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: "",
    },
    groups: [],
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        groups: response.data,
      });

      setState({
        ...state,
        loading: false,
        contact: response.data,
        groups: groupResponse.data,
      });
    } catch (error) {}
  }, []);

  const updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();

    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      setState({
        ...state,
        errorMessage: error.message,
      });
      navigate(`/contacts/edit/${contactId}`, { replace: false });
    }
  };

  let { loading, contact, groups, errorMessage } = state;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="add-contact p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-primary fw-bold">Edit Contact</p>
                <p className="fst-italic ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero facere ratione numquam, delectus aliquid eveniet
                  aperiam aliquam iure pariatur? Adipisci vero ab deleniti
                  saepe, accusamus in error omnis temporibus corporis?
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <form onSubmit={submitForm}>
                  <div className="mb-2">
                    <input
                      required="true"
                      name="name"
                      onChange={updateInput}
                      value={contact.name}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required="true"
                      name="photo"
                      onChange={updateInput}
                      value={contact.photo}
                      type="text"
                      className="form-control"
                      placeholder="Photo url"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required="true"
                      name="mobile"
                      onChange={updateInput}
                      value={contact.mobile}
                      type="number"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required="true"
                      name="email"
                      onChange={updateInput}
                      value={contact.email}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required="true"
                      name="company"
                      onChange={updateInput}
                      value={contact.company}
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required="true"
                      name="title"
                      onChange={updateInput}
                      value={contact.title}
                      type="text"
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      required="true"
                      name="groupId"
                      onChange={updateInput}
                      value={contact.groupId}
                      className="form-control"
                    >
                      <option value="">Select a Group</option>
                      {groups.length > 0 &&
                        groups.map((group) => {
                          return (
                            <option value={group.id} key={group.id}>
                              {group.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value={`Update`}
                    />
                    <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <img
                  src="https://imgs.search.brave.com/q30mtGI6Uq8L1sU9H02hXDiETyRoSxEtuLtXNNmTvSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24teW91bmct/dXNlci1pY29uLTI0/MDAucG5n"
                  alt=""
                  className="img-fluid contact-img"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default EditContact;
