import React from "react";
import {Container, Row, Col, Button, Form, FormGroup, Input, Label, FormText} from "reactstrap";


function Updateuser(props){
    
    const updateInputValue = (e) => {
        console.log('fasdsfadsf', e.target.name,e.target.value);
        let abc = props.user.name;
        abc = e.target.value;
    }
    return(
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10} className="userform">
                <a href="/"> <Button outline color="success">Back</Button></a>
                <br/><br/>
                <h5>Update User</h5>
                <Form>
                    <Row>
                        <Col sm={6} xs={12}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" name="name" placeholder="Name" value={props.user.name} onChange={(e) => updateInputValue(e)}/>
                        </FormGroup>
                        </Col>
                        <Col sm={6} xs={12}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email" placeholder="Email ID" value={props.user.email} />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} xs={12}>
                        <FormGroup>
                            <Label>Mobile</Label>
                            <Input type="text" name="mobile" placeholder="Mobile" value={props.user.mobile} />
                        </FormGroup>
                        </Col>
                        <Col sm={6} xs={12}>
                        <FormGroup>
                            <Label>Role</Label>
                            <Input type="select" name="role">
                            <option value={props.user.role} selected={props.user.role==='Sender'}>Sender</option>
                            <option value={props.user.role} selected={props.user.role==='Receiver'}>Receiver</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} xs="12">
                        <FormGroup>
                            <Label>Status</Label>
                            <Input type="select" name="status" >
                            <option value={props.user.status} selected={props.user.status==='active'}>Active</option>
                            <option value={props.user.status} selected={props.user.status==='inactive'}>Inactive</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <br/>
                    <Button>Submit</Button>
                </Form>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    ) ;
}


export default Updateuser;