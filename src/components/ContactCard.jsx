import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

function ContactCard({ contact }) {
  const {onOpen, onClose, isOpen} = useDisclose();
  //const [isUpdate, setIsUpdate] = useState(false);


  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      toast.success('Contact Deleted Successfully');
      console.log('deleted');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        key={contact.id}
        className="flex items-center justify-between p-2 rounded-md mt-2 bg-yellow"
      >
        <div className="flex gap-2 items-center">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="text-black">
            <h2 className="text-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash {/*onClick={()=>deleteContact(contact.id)}*/} className="cursor-pointer text-orange" />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </div>
  );
}

export default ContactCard;
