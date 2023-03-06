import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { User } from '../../../app/Models/User';
import UserDetails from '../details/UserDetails';
import UserForm from '../form/UserForm';
import UserList from './UserList';

interface Props {
    users: User[];
    selectedUser: User | undefined;
    selectUser: (id: number) => void;
    cancelSelectUser: () => void;
    editMode: boolean;
    OpenForm: (id: number) => void;
    CloseForm: () => void;
    createOrEdit: (user: User) => void;
}

export default function UserDashboard({ users, selectedUser,
    selectUser, cancelSelectUser, editMode, OpenForm, CloseForm, createOrEdit }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <UserList users={users} selectUser={selectUser} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedUser && !editMode &&
                    <UserDetails user={selectedUser}
                        cancelSelectUser={cancelSelectUser}
                        openForm={OpenForm} />}
                {editMode &&
                    <UserForm
                        closeForm={CloseForm}
                        user={selectedUser}
                        createOrEdit={createOrEdit} />}
            </Grid.Column>
        </Grid>
    )
}