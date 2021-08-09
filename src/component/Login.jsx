import React from "react";
import {Container, Row, Button, Form, FormGroup, Input, Label} from "reactstrap";

function Login(){
    return(
        <Container fluid="true">
            <Row className="App">
                <h2>Login</h2>
                <Form className="form">
                    <FormGroup>
                        <Label for="exampleEmail">Username</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="********" />
                    </FormGroup>
                    <br/>
                    <Button>Submit</Button>
                </Form>
            </Row>
        </Container>
    ) ;
}


export default Login;