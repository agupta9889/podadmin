import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";
import axios from "axios";
import { Table, Pagination, PaginationItem, PaginationLink, Button, Badge } from "reactstrap";


function Userdetail (props){
    
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
                    { props.users.map((user, idx) => (

                    <tr key={idx} >
                        <td scope="row">{idx+1}</td>
                        <td>{user.name}</td>
                        <td>{user.mobileNo}</td>
                        <td>{user.email}</td>
                        <td>{user.roles && user.roles[0].name}</td>
                        <td>
                            {
                                (user.userStatus === '1')
                                ?<Badge color="success" pill>Active</Badge>
                                :<Badge color="danger" pill>Inactive</Badge>
                            }
                        </td>
                        <td>
                            <span className="tex-center-edit" data-tip data-for="editTip" onClick={() => props.getUser(user)}>
                                <FontAwesomeIcon  icon={faEdit } />
                            </span>
                            <span className="tex-center-delete" data-tip data-for="deleteTip">
                                <FontAwesomeIcon  icon={faTrash } />
                            </span>
                        </td>
                        <ReactTooltip id="editTip" place="top" effect="solid">
                            Edit User
                        </ReactTooltip>
                        <ReactTooltip id="deleteTip" place="top" effect="solid">
                            Delete User
                        </ReactTooltip>
                    </tr>
                    ))}

                </tbody>
            </Table>
            {/* <Pagination aria-label="Page navigation example">
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
            </Pagination> */}
        </>
    );
}

export default Userdetail;