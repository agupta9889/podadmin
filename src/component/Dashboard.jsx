import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Userdetail from "./Userdetail";
import EditUser from "./EditUser";
import {Container, Row, Col, Card, CardTitle, CardText, CardGroup} from "reactstrap";


    function Dashboard (props){
        const [usersList, setUsersList] = useState(['']);
        const [activeStatus, setActiveStatus] = useState(null);
        const [inactiveStatus, setInactiveStatus] = useState(null);
        useEffect(() => {
            loadUsers ();
        }, []);
    
        const loadUsers = async () => {
            axios.get('http://208.82.115.154:8080/api/auth/getUsers').then(result => {            
            const resp = result.data.users;            
            const usersActive = resp.filter((a) => a.userStatus === '1');
            setActiveStatus(usersActive.length);
            const usersInactive = resp.filter((a) => a.userStatus === '0');
            //console.log('Arun rajeev kumardd ', usersActive);
            setInactiveStatus(usersInactive.length);
            setUsersList(resp);
            
            });
            
        }

        const [enable, setEnable]= useState(true);
        const [users, setUsers]= useState({
            id: '',
            name: "",
            mobileNo: "",
            email:"",
            roles: "",
            userStatus:"",
        });
        const showUser = (user)=>{
            setUsers({id: user._id,
            name: user.name,
            mobileNo: user.mobileNo,
            email:user.email,
            roles: user.roles,
            userStatus:user.userStatus,})
            setEnable(false)
        }

        return(
            <>
                <Container fluid="true" >  
                    <Header /> 
                    <Row>
                        <Col sm="2" xs="4" className="sidebarbg"><Sidebar /></Col>
                        <Col sm="10" xs="8" className="dashboardbody">Welcome to Dashboard !!
                        <br/><br/>
                        <CardGroup>
                            <Card body inverse color="success">
                                <CardText>Total Users</CardText>
                                <CardTitle tag="h5">{ usersList.length }</CardTitle>
                            </Card>
                                <Card body inverse color="info">
                                <CardText>Active Users</CardText>
                                <CardTitle tag="h5">{ activeStatus }</CardTitle>
                            </Card>
                                <Card body inverse color="danger">
                                <CardText>Inactive Users</CardText>
                            <CardTitle tag="h5">{inactiveStatus}</CardTitle>
                            </Card>
                        </CardGroup>
                        <br/><br/>
                        {   enable ? 
                            <Userdetail getUser={showUser} users={usersList} />
                            :  
                            <EditUser user={users} /> 
                        }
                    </Col>
                    </Row>
                </Container>
            </>
        );
    }

export default Dashboard;