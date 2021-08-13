import React, {useState, useEffect} from "react";
import {Container, Row, Col, Button, Form, FormGroup, Input, Label, FormText} from "reactstrap";

    function EditUser(props){

        const [editUser, setEditUser] = useState({
            id: '',
            name: "",
            mobileNo: "",
            email:"",
            roles: "",
            userStatus:"",
        });

        useEffect(() => {
            setEditUser({
                id: props.user.id,
                name: props.user.name,
                mobileNo: props.user.mobileNo,
                email: props.user.email,
                roles: props.user.roles,
                userStatus: props.user.userStatus,
            });
                //console.log('fasdfasdfa',props.user)
        },[]);

        const updateInputValue = (e) => {
            const editU = Object.assign({}, editUser);
            editU[e.target.name] = e.target.value;
            //console.log('ArunEdit', editU);
            setEditUser(editU);
            
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
                                    <Input type="text" name="name" placeholder="Name" value={editUser.name} onChange={(e) => updateInputValue(e)}/>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} xs={12}>
                                    <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="email" name="email" placeholder="Email ID" value={editUser.email} onChange={(e) => updateInputValue(e)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12}>
                                    <FormGroup>
                                    <Label>Mobile</Label>
                                    <Input type="number" name="mobileNo" placeholder="Mobile" value={editUser.mobileNo} onChange={(e) => updateInputValue(e)} />
                                    </FormGroup>
                                </Col>
                                <Col sm={6} xs={12}>
                                    <FormGroup>
                                    <Label>Role</Label>
                                    <Input type="select" name="roles" onChange={(e) => updateInputValue(e)}>
                                    <option value="sender" selected={ editUser.roles && editUser.roles[0].name=== 'sender' ? 'selected' : "" } >Sender</option>
                                    <option value="courier" selected={ editUser.roles && editUser.roles[0].name=== 'courier' ? 'selected' : "" }>Courier</option>
                                    <option value="transporter/shipper" selected={ editUser.roles && editUser.roles[0].name==='transporter/shipper' ? 'selected' : "" }>Transporter/Shipper</option>
                                    </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs="12">
                                    <FormGroup>
                                    <Label>Status</Label>
                                    <Input type="select" name="userStatus" onChange={(e) => updateInputValue(e)}>
                                    <option value="0" selected={ editUser.userStatus=== '1' ? 'selected' : "" }>Active</option>
                                    <option value="1" selected={ editUser.userStatus=== '0' ? 'selected' : "" }>Inactive</option>
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
        );
    }


export default EditUser;