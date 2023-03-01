import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { User } from '../../../app/Models/User';
import UserList from './UserList';

interface Props {
    users: User[];
}

export default function UserDashboard({ users }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <UserList users={users}/>
            </Grid.Column>
        </Grid>
    )
}