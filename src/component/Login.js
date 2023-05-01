import React, { useState } from "react";
//import './Login.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    let  user = {
        "email": "test@test.com",
        "password": "123456",
      }
    
    const handlesubmit = (e) => {
        e.preventDefault();

        if (email === user.email || email === user.username) {
            if (password === user.password) {
                alert("User Loged In");
                navigate('/bank')
                
            } else {
                alert("wrong password");
            }
        } else {
            alert("please check you username or Email");
        }
       
    };
    return (
        
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '50px'}}>
           
               

                    <Card style={{ width: '20rem', textAlign: 'center' }}>

                        <Card.Body style={{ background: 'pink',borderRadius:'5px',border:'2px solid blue'}}>
                            <Card.Title style={{
                                color
                                    : 'blue'
                            }}>Login Form</Card.Title>
                            <br></br>
                            <Card.Text>
                                <Form onSubmit={handlesubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label
                                        >Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)}
                                        />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required
                                            value={password} onChange={(e) => setpassword(e.target.value)} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                   
                                </Form>
                            </Card.Text>



                        </Card.Body>
                    </Card>
                

           
        </Container>
      



    )
}

export default Login;