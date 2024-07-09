import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import SearchUsers from './components/SearchUsers';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');

  const addUser = (user) => {
    if (editingIndex !== null) {
      const updatedUsers = users.map((u, index) =>
        index === editingIndex ? user : u
      );
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, user]);
    }
    setFilteredUsers([]);
    setCurrentUser(null);
    setIsSearching(false);
    setSearchMessage('');
  };

  const editUser = (index) => {
    setEditingIndex(index);
    setCurrentUser(users[index]);
    setFilteredUsers([]);
    setIsSearching(false);
    setSearchMessage('');
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
    setFilteredUsers([]);
    setIsSearching(false);
    setSearchMessage('');
  };

  const searchUser = (lastName) => {
    const results = users.filter((user) =>
      user.lastName.toLowerCase().includes(lastName.toLowerCase())
    );
    if (results.length > 0) {
      setFilteredUsers(results);
      setIsSearching(true);
      setSearchMessage('');
    } else {
      setFilteredUsers([]);
      setIsSearching(false);
      setSearchMessage(`No users found with last name "${lastName}"`);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Phonebook</h1>
        <AddUserForm onSubmit={addUser} user={currentUser} />
        <SearchUsers onSearch={searchUser} />
        {isSearching && <p>Search results:</p>}
        {searchMessage && <p>{searchMessage}</p>}
        <UserList users={filteredUsers.length ? filteredUsers : users} onEdit={editUser} onDelete={deleteUser} />
      </div>
    </div>
  );
}

export default App;