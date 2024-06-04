"use client";

import React, { useState, useRef } from "react";
import useCourseStore from "@store/courseStore";
import {Button, Wrapper, Input} from './styles/style';



const CourseForm = () =>{

    const addCourse = useCourseStore((state) => state.addCourse);

    const [courseTitle, setCourseTitle] = useState('');

    const handleCourseSubmit = () =>{
        if(!courseTitle) return alert('Please add course title');
        addCourse({
            id:Math.ceil(Math.random() * 10000),
            title:courseTitle
        })
        setCourseTitle('');
    }

    

    return (
        <>
            <Wrapper>
            <h3>Add Course</h3>
                <Input
                    value={courseTitle}
                    onChange={(e:any)=>{
                        setCourseTitle(e.target.value);
                    }}
                ></Input>
                <Button
                onClick={() =>{
                    handleCourseSubmit()
                }}
                >Add</Button>
            </Wrapper>
        </>
    )
}

export default CourseForm;
