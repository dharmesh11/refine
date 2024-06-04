"use client";

import React from "react";
import useCourseStore from "@store/courseStore";
import { StyledTable, TableContainer } from '../tags/styles/tableStyle';
import {Button} from './styles/style';




const CourseList = () =>{
    
    const {courses, removeCourse} = useCourseStore(
        (state) => ({
            courses:state.courses,
            removeCourse: state.removeCourse,
        }),
    )

    return (
        (courses.length > 0)
        ?
        <>
            
            <TableContainer>
            <h3>Course List</h3>
                <StyledTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {courses.map((course:any, id:number) => {
                            return(
                                <React.Fragment key={id}>   
                                <tr>
                                <td>{course?.id}</td>
                                <td>{course?.title}</td>
                                <td>
                                    <Button $primary
                                        onClick={() => {
                                            removeCourse(course.id);
                                        }}
                                    >Delete</Button>
                                </td>
                                </tr>
                                </React.Fragment>
                            )
                        })}
                        
                    
                </tbody>
                </StyledTable>
            </TableContainer>
        </>
    : null
    ) 
}

export default CourseList;
