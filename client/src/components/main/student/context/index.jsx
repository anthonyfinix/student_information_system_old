import React, { createContext } from 'react';
import { useState } from 'react';
import getAllStudent from '../util/getAllStudent';

const StudentContext = createContext();

export { StudentContext };
export default function StudentProvider(props) {
    const [students, setStudents] = useState([])

    const fetchStudents = async () => {
        console.log('fetching students');
        let students = await getAllStudent()
        await setStudents([...students.students])
        return students;
    }

    return (
        <StudentContext.Provider value={{ students, fetchStudents }}>
            {props.children}
        </StudentContext.Provider>
    )
}
