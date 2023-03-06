import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { User } from "../../../app/Models/User";

interface Props {
    user: User;
    cancelSelectUser: () => void;
    openForm: (id: number) => void;
}


export default function UserDetails({ user, cancelSelectUser, openForm }: Props) {
    return (
        <Card>
            <Image src={`/assets/categoryImages/culture.jpg`} />
            <Card.Content>
                <Card.Header>{user.username}</Card.Header>
                <Card.Meta>
                    <span>{user.createDate.toString()}</span>
                </Card.Meta>
                <Card.Description>
                    {user.email}
                </Card.Description>
                <Card.Content>
                    <Button.Group widths='2'>
                        <Button onClick={() => openForm(user.id)} basic color="blue" content='Edit' />
                        <Button onClick={cancelSelectUser} basic color="grey" content='Cancel' />
                    </Button.Group>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}