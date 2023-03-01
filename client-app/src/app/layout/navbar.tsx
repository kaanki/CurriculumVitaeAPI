import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo/png/logo-no-background.png" alt="logo" style={{ marginRight: '10px' }} />
                    CurriculumVitae
                </Menu.Item>
                <Menu.Item>Users</Menu.Item>
                <Menu.Item>
                    <Button positive content='Create User' />
                </Menu.Item>
            </Container>

        </Menu>
    )
}