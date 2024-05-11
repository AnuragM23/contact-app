import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup';

const contactSchemaValidation = Yup.object().shape({
  name : Yup.string().required('Name is Required'),
  email : Yup.string().email('Invalid Email').required('Email is Required'),
});


function AddAndUpdateContact({ isOpen, onClose, isUpdate, contact }) {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success('Contact Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success('Contact Updated Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            //console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
            onClose();
          }}
        >
          <Form className="mx-3 pb-5 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field className="pl-2 border h-10" name="name" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap1">
              <label htmlFor="email">Email</label>
              <Field type="email" className="pl-2 border h-10" name="email" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="mt-1 bg-amber-400 border py-1.5 px-3">
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddAndUpdateContact;
