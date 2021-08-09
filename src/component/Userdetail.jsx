import React,{useEffect,useState} from "react";
import axios from "axios";
import { Table, Pagination, PaginationItem, PaginationLink, Button, Badge } from "reactstrap";

function Userdetail (props){
    const [users, setusers] = useState([]);
    
    useEffect(() => {
    axios.post(`http://208.82.115.154:8080/api/auth/getAllUsersAdmin`)
    .then(res => {
        //console.log('Arun', res.data)
        setusers(res.data)    
  })

},[]);
    return(
        <>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, idx) => (
                    
                <tr>
                    <th key={ user._id } scope="row">{idx+1}</th>
                    <td>{user.name}</td>
                    <td>{user.mobileNo}</td>
                    <td>{user.email}</td>
                    <td>{user.roles}</td>
                    <td>
                        {
                            (user.userStatus === 0)
                            ?<Badge color="success" pill>Active</Badge>
                            :<Badge color="danger" pill>Inactive</Badge>
                        }
                    </td>
                    <td><Button outline color="info" onClick={() => props.getUser(1,'arun', 98892, 'arun@gmail.com', 'sender', 'active')}>Edit User</Button></td>
                </tr>
                ))}
                
            </tbody>
        </Table>
        <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
            <PaginationLink first href="#" /></PaginationItem>
            <PaginationItem disabled>
            <PaginationLink previous href="#" /></PaginationItem>
            <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
            <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    </>
    );
}

export default Userdetail;