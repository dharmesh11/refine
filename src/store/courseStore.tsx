import {create} from 'zustand';

import {devtools, persist} from 'zustand/middleware'; // persist used to strore value in localstorage

// Add courseStore fn and use set for data manipulation
const courseStore = (set:any) => ({
 courses:[],

 //adding course to store
 addCourse: (course:any) =>{
     set((state:any) => ({
         courses:[course,...state.courses],
     }))
 },

 //remove course 
 removeCourse: (courseId:number) =>{
     set((state:any) => ({
         courses: state.courses.filter((course:any) => course.id !== courseId)
     }))
 }
})

// create store with 'use' kw and export this store variable
const useCourseStore = create(
    devtools(
        persist(courseStore,{
            name: 'courses', // name of the item in the storage (must be unique)
        })
    )   
)

export default useCourseStore;