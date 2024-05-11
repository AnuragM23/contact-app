import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import NotfoundContact from "./components/NotfoundContact";





function App() {
  const [contacts, setContacts] = useState([]);
  const { onOpen, onClose, isOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });

        //console.log(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
    // const contactsSnapshot = await getDocs(contactsRef);

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex flex-grow ">
          <div className="flex items-center relative">
            <FiSearch className="ml-1 absolute text-white text-3xl" />
            <input
              onChange={filterContacts}
              type="text"
              className="text-white w-[300px] pl-10 flex-grow  bg-transparent border border-white rounded-md h-[40px]"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white gap-2 cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? <NotfoundContact/> : contacts.map((contact) => (
            //console.log(contact);
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
        <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      </div>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
