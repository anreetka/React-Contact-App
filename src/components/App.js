import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import React, {useState, useEffect} from "react";
import {v4 as uuid} from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts,{id: uuid(), ...contact}]);
  }

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <>
      <Header/>
      <div className='ui container' style={{marginTop: '2%', marginLeft:'5%', marginRight:'2%', display:'flex', width:'100%'}}>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
    </>
  );
}

export default App;
