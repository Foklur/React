import React from 'react';


const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    <span>{user.firstName} {user.lastName} - {user.email} - {user.phone}</span>
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;