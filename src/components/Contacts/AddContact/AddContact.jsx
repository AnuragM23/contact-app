import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';

function AddContact() {

  let navigate = useNavigate();

  const [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: ""
    },
    groups: [],
    errorMessage: ''
  })

  let updateInput = (event) => {
    setState({
      ...state,
      contact:{
        ...state.contact,
        [event.target.name]: event.target.value
      }
    });
  }

  useEffect(async () => {
    try {
      setState({...state, loading: true});
      let response = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        groups: response.data
      });
      
    } catch (error) {
      
    }
  }, [])

  let submitForm = async (event) => {
    event.preventDefault();

    try {
      let response = await ContactService.createContact(state.contact);
      if(response){
        navigate('/contacts/list', {replace: true});
      }
    } catch (error) {
      setState({
        ...state,
        errorMessage: error.message
      });
      navigate('/contacts/add', {replace: false});
    }
  }
  

  let {loading, contact, groups, errorMessage} = state;

  return (
    <div>
      {/* <pre>{JSON.stringify(contact)}</pre> */}
      <section className='add-contact p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-success fw-bold">Create Contact</p>
              <p className="fst-italic ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere ratione numquam, delectus aliquid eveniet aperiam aliquam iure pariatur? Adipisci vero ab deleniti saepe, accusamus in error omnis temporibus corporis?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={submitForm}>
                <div className='mb-2'>
                  <input required={true} name='name'
                  value={contact.name}
                  onChange={updateInput} type="text" className='form-control' placeholder='Name' />
                </div>
                <div className='mb-2'>
                  <input required={true} name='photo'
                  value={contact.photo}
                  onChange={updateInput} type="text" className='form-control'  placeholder='Photo url' />
                </div>
                <div className='mb-2'>
                  <input required={true} name='mobile'
                  value={contact.mobile}
                  onChange={updateInput} type="number" className='form-control' placeholder='Mobile Number' />
                </div>
                <div className='mb-2'>
                  <input required={true} name='email'
                  value={contact.email}
                  onChange={updateInput} type="email" className='form-control' placeholder='Email' />
                </div>
                <div className='mb-2'>
                  <input required={true} name='company'
                  value={contact.company}
                  onChange={updateInput} type="text" className='form-control' placeholder='Company Name' />
                </div>
                <div className='mb-2'>
                  <input required={true} name='title'
                  value={contact.title}
                  onChange={updateInput} type="text" className='form-control' placeholder='Title' />
                </div>
                <div className='mb-2'>
                  <select  name='groupId'
                  value={contact.title}
                  onChange={updateInput} type="text" className="form-control">
                    <option value={``}>Select a Group</option>
                    {
                      groups.length > 0 && groups.map((group) => {
                        return (<option value={group.id} key={group.id}>{group.name}</option>)
                      })
                    }
                  </select>
                </div>
                <div className='mb-2'>
                  <input onClick={submitForm} type="submit" className='btn btn-success' value={`Create`} />
                  <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddContact