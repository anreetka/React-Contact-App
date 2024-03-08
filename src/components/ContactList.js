import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) =>{
    console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact)=>{
        return(
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
    })

    return(
        <div className="ui container" style={{ width:'50%', marginLeft:'25%', marginRight:'25%', marginTop:'2%'}}>
            <h2 style={{fontSize:'35px'}}>Contact List
                <Link to='/add'>
                    <button  style={{marginLeft:'40%'}} className='ui button blue right'>Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list"  style={{marginRight:'20%'}}>
                 {renderContactList}
            </div>
        </div>

    );
}

export default ContactList;