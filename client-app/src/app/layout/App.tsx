import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import { User } from '../Models/User';
import NavBar from './navbar';
import UserDashboard from '../../features/users/dashboard/UserDashBoard';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('http://localhost:5000/api/users')
      .then(response => {
        console.log(response);
        setUsers(response.data);
      })
  }, [])

  return (
    < Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <UserDashboard users={users} />
      </Container>
    </Fragment>
  );
}

export default App;
