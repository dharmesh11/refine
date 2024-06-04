"use client";

import React, { useState, useRef } from "react";
import useCourseStore from "@store/courseStore";
import {Button, Wrapper} from './styles/style';



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
                <input
                    value={courseTitle}
                    onChange={(e)=>{
                        setCourseTitle(e.target.value);
                    }}
                ></input>
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
