import React from 'react'
import { Card, Button } from 'react-bootstrap'
function CustomCard({ user, greeting }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/a0/fc/71/a0fc71af7d81dc7f2ca121616c235e65.jpg" />
                <Card.Body>
                    <Card.Title>{user.email}</Card.Title>
                    <Card.Text>
                        {user.firstname}<br />
                        {user.lastname} <br />
                        {user.password} <br />
                    </Card.Text>
                    <Button variant="primary" onClick={greeting}>Hide</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CustomCard