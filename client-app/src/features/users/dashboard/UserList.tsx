import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { User } from "../../../app/Models/User";

interface Props {
    users: User[];
    selectUser: (id: number) => void;
}

export default function UserList({ users, selectUser }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {users.map(user => (
                    <Item key={user.id}>
                        <Item.Content >
                            <Item.Header as='a'>{user.name} - {user.id} </Item.Header>
                            <Item.Meta>{user.updateDate.toString()}</Item.Meta>
                            <Item.Description>
                                <div>{user.email}</div>
                                <div>{user.username}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectUser(user.id)} floated='right' content='View' color='blue' />
                                <Label basic content={user.role}></Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                )
                )}
            </Item.Group>
        </Segment>
    )
}