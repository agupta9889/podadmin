import React, {useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Userdetail from "./Userdetail";
import Updateuser from "./Updateuser";
import {Container, Row, Col, Card, CardTitle, CardText, CardGroup,
    } from "reactstrap";



function Dashboard (){
    const [enable, setEnable]= useState(true);
    const [users, setUsers]= useState({
        id: 2,
        name: "arun",
        mobile: 9773643764,
        email:"rajeev@gmail.com",
        role: "Receiver",
        status:"inactive",
    });
    const showUser = (id,name,mobile,email,role,status,env)=>{
        // if (env === false){
            setEnable(false)
        // }
        //console.log('AAAAAAAGHGGGGGGGGGGGGDDDDDDDDDDD', id,name,mobile,email,role,status,env,enable);
        
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
                        <CardTitle tag="h5">25</CardTitle>
                    </Card>
                    <Card body inverse color="info">
                        <CardText>Active Users</CardText>
                        <CardTitle tag="h5">15</CardTitle>
                    </Card>
                    <Card body inverse color="danger">
                        <CardText>Inactive Users</CardText>
                        <CardTitle tag="h5">10</CardTitle>
                    </Card>
                </CardGroup>
                <br/><br/>
                {enable ? 
                <Userdetail getUser={showUser} />
                :  
                <Updateuser user={users} /> 
                }
                </Col>
            </Row>
        </Container>
        </>
    );

}

export default Dashboard;