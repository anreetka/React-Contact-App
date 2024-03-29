import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) =>{

    const {id, name, email} = props.contact;

    return(
        <div className="item" style={{display:'flex'}}>
            <img className="ui avatar image" src={user} alt="user" />
                <div className="content" style={{width:'100%'}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            <i className="trash alternate outline icon" onClick={()=>props.clickHandler(id)}/>
        </div>
    )
};

export default ContactCard;