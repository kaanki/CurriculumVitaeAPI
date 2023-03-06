import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import { User } from '../Models/User';
import NavBar from './navbar';
import UserDashboard from '../../features/users/dashboard/UserDashBoard';

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<User[]>('http://localhost:5000/api/users')
      .then(response => {
        console.log(response);
        setUsers(response.data);
      })
  }, [])

  function handleSelectUser(id: number) {
    setSelectedUser(users.find(x => x.id === id));
  }

  function handleCancelSelectUser() {
    setSelectedUser(undefined);
  }

  function handleFormOpen(id?: number) {
    id ? handleSelectUser(id) : handleCancelSelectUser();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditUser(user: User) {
    debugger;
    if (user.id && user.id !== -1) {
      setUsers([...users.filter(x => x.id !== user.id), user])
    } else {
      user.id = Math.max(...users.map(o => o.id)) + 1;
      setUsers([...users, user]);
    }
    setEditMode(false);
    setSelectedUser(user);
  }

  return (
    < Fragment>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <UserDashboard users={users}
          selectedUser={selectedUser}
          selectUser={handleSelectUser}
          cancelSelectUser={handleCancelSelectUser}
          editMode={editMode}
          OpenForm={handleFormOpen}
          CloseForm={handleFormClose}
          createOrEdit={handleCreateOrEditUser}
        />
      </Container>
    </Fragment>
  );
}

export default App;
