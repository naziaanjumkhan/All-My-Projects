import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StudentTable = () => {

  const [student,setStudent] = useState("");
  const navigate = useNavigate();
  const displayDetails=(id)=>{
    navigate("/student/view/"+id);
  }
  const editDetails=(id)=>{
    navigate("/student/edit/"+id);
  }

  const deleteDetails=(id)=>{
    if(window.confirm("r u sure.?")){
      fetch("http://localhost:4000/students/"+id,{
        method:'DELETE',
      })
      .then((res)=>{
        alert("Student Data Deleted Successfully");
        window.location.reload();
      })
      .catch((err)=>console.log(err.message)
      )
    }
   
  }

  useEffect(()=>{
    fetch("http://localhost:4000/students")
    .then((res)=>res.json())
    .then((data)=>setStudent(data))
    .catch((error)=>console.error(error.message))
  },[])

  return (
    <div className="bg-white flex justify-center items-center">
      <div className="w-[650px] shadow shadow-purple-900 mt-10 relative p-5 rounded-lg">
      <h1 className="text-center font-bold mb-6 text-xl text-purple-800 uppercase shadow ">Student Record</h1>
        
        {/* Button */}
        <div className="flex justify-start mb-3">

        <Link to="/student/create" className="bg-purple-600 px-4 py-2 text-white font-bold rounded-lg hover:bg-purple-700 mt-2 mb-2">Add To Student</Link>
  
        </div>

        {/* Table */}
        <table className="w-full">
          <thead className="bg-purple-700 text-white rounded-lg">            
              <tr>
              <th className="p-2 ">Sno</th>
              <th className="p-2 ">Name</th>
              <th className="p-2 ">Place</th>
              <th className="p-2 ">Phone</th>
              <th className="p-2">Action</th>
            </tr>
            
          </thead>
          
          <tbody>
            {student && student.map((item, index)=>(
            <tr key={index}>
          
              <td className="p-2  text-center">{item.id}</td>
              <td className="p-2 ">{item.name}</td>
              <td className="p-2 ">{item.place}</td>
              <td className="p-2 whitespace-nowrap overflow-hidden text-ellipsis">{item.phone}</td>
              <td className="py-3 flex items-center ml-8 gap-3">
               <button className="bg-green-600 px-5 py-2 text-white font-bold rounded-lg hover:bg-green-700 cursor-pointer" onClick={()=>editDetails(item.id)}>Edit</button>
               <button className="bg-orange-600 px-5 py-2 text-white font-bold rounded-lg hover:bg-orange-700 cursor-pointer" onClick={()=>displayDetails(item.id)}>View</button>

               <button className="bg-red-600 px-5 py-2 text-white font-bold rounded-lg hover:bg-red-700 cursor-pointer" onClick={()=>deleteDetails(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentTable;
