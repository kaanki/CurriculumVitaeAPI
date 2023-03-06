import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { User } from '../../../app/Models/User';

interface Props {
    user: User | undefined;
    closeForm: () => void;
    createOrEdit: (user: User) => void;
}

export default function UserForm({ user: selectedUser, closeForm, createOrEdit }: Props) {

    const initialState = selectedUser ?? {
        id: -1,
        name: '',
        username: '',
        email: '',
        password: '',
        status: 0,
        role: 0,
        createDate: new Date(),
        updateDate: new Date()
    }

    const [user, setUser] = useState(initialState);

    function handleSubmit() {
        createOrEdit(user);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Name' value={user.name} name='name' onChange={handleInputChange} />
                <Form.Input placeholder='username' value={user.username} name='username' onChange={handleInputChange} />
                <Form.Input placeholder='email' value={user.email} name='email' onChange={handleInputChange} />
                <Form.Input placeholder='password' value={user.password} name='password' onChange={handleInputChange} type='password' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}