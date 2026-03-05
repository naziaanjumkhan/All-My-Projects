import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const StudentView = () => {

  const {studentid} = useParams();
  const [studentData,setStudentData] = useState({});

  useEffect(()=>{
    fetch("http://localhost:4000/students/"+studentid)
    .then((res)=>res.json())
    .then((data)=>setStudentData(data))
    .catch((err)=>console.log(err.message)
  )
  },[]);
  

  return (
    <div className="bg-white flex justify-center items-center">
      <div className="w-[650px] shadow shadow-purple-900 mt-10 relative p-5 rounded-lg">
        <h1 className="text-center font-bold mb-6 text-xl text-purple-800 uppercase ">
          Student Details
        </h1>
        {studentData && <div className='details'>
        <p className='px-6'><strong>ID:  </strong>{studentData.id}</p>
        <p className='px-6'><strong>NAME: </strong>{studentData.name}</p>
        <p className='px-6'><strong>PLACE: </strong>{studentData.place}</p>
        <p className='px-6'><strong>PHONE: </strong>{studentData.phone}</p>
        </div>}
        <Link to="/" className="bg-red-700 px-4 py-2 font-bold text-white rounded scale-[1.2] cursor-pointer inline-flex m-6">Back</Link>
        </div>
        </div>
  )
}

export default StudentView