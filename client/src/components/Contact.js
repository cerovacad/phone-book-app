import React from 'react'; 
import Delete from './Delete';
import Edit from './Edit'; 

const Contact = (props) => (
    <tr>
        <td>{props.contact.first_name}</td>
        <td>{props.contact.last_name}</td>
        <td>{props.contact.phone}</td>
        <td>
            <Edit contact={props.contact} handleUpdate={props.handleUpdate}/>
        </td>
        <td>
            <Delete contact={props.contact} handleDelete={props.handleDelete}/>
        </td>
    </tr>
);

export default Contact;