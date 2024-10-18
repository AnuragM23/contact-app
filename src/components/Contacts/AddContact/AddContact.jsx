import React from 'react'
import { Link } from 'react-router-dom'

function AddContact() {
  return (
    <div>
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
              <form >
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Name' />
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Photo url' />
                </div>
                <div className='mb-2'>
                  <input type="number" className='form-control' placeholder='Mobile Number' />
                </div>
                <div className='mb-2'>
                  <input type="email" className='form-control' placeholder='Email' />
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Company Name' />
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Title' />
                </div>
                <div className='mb-2'>
                  <select  className="form-control">
                    <option value="">Select a Group</option>
                  </select>
                </div>
                <div className='mb-2'>
                  <input type="submit" className='btn btn-success' value={`Create`} />
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