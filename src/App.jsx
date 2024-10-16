import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import ContactList from './components/Contacts/ContactList/ContactList'
import Navbar from './components/Navbar/Navbar'
import EditContact from './components/Contacts/EditContact/EditContact'
import AddContact from './components/Contacts/AddContact/AddContact'
import ViewContact from './components/Contacts/ViewContact/ViewContact'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes>

      
    </>
  )
}

export default App