import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentCreate = () => {

  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [place,setPlace] = useState("");
  const [phone,setPhone] = useState("");
  const [validation,setValidation] = useState(false);
  const navigate = useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault();
  const studentData={id,name,place,phone};
  fetch("http://localhost:4000/students",{
    method:'POST',
    headers:{
      "content-type":"applicaton/json"
    },
    body:JSON.stringify(studentData)
})
  .then((res)=>{alert("Student Data Added Successfully");
    navigate("/")
  })
  .catch((err)=>console.log(err.message))
  
}

  return (
    <div className="bg-white flex justify-center items-center">
      <div className="w-[650px] shadow shadow-purple-900 mt-10 relative p-5 rounded-lg">
        <h1 className="text-center font-bold mb-6 text-xl text-purple-800 uppercase ">
          Add New Student
        </h1>
        
          <form onSubmit={handleSubmit}>
          
            <label htmlFor="id" className="font-bold">ID:</label>
            <input type="text" id="id" name="id" className="w-full border rounded border-gray-300 mb-1 p-1" required value={id} onChange={(e)=>setId(e.target.value)} onMouseDown={()=>setValidation(true)}/>
            {id.length===0 && validation && <span className="text-red-600">Please Enter Your Id<br/></span>}

            <label htmlFor="name" className="font-bold">NAME:</label>
            <input type="text" id="name" name="name" className="w-full border rounded border-gray-300 mb-1 p-1 " required value={name} onChange={(e)=>setName(e.target.value)} onMouseDown={()=>setValidation(true)}/>
            {name.length===0 && validation && <span className="text-red-600 mb-4">Please Enter Your Name<br/></span>}

            <label htmlFor="place" className="font-bold">PLACE:</label>
            <input type="text" id="place" name="place" className="w-full border rounded border-gray-300 mb-1 p-1" required value={place} onChange={(e)=>setPlace(e.target.value)} onMouseDown={()=>setValidation(true)}/>
              {place.length===0 && validation && <span className="text-red-600 mb-4">Please Enter Your Place<br/></span>}

            <label htmlFor="phone" className="font-bold">PHONE:</label>
            <input type="number" id="phone" name="phone" className="w-full border rounded border-gray-300 mb-1 p-1" required value={phone} onChange={(e)=>setPhone(e.target.value)} onMouseDown={()=>setValidation(true)}/>
              {phone.length===0 && validation && <span className="text-red-600 mb-4">Please Enter Your Phone<br/></span>}

            <button className="bg-purple-700  text-white font-bold px-4 py-2 rounded scale-[1.2] cursor-pointer mt-9">Save</button>
           

            <Link to="/" className="bg-red-700 px-4 py-2 font-bold text-white rounded scale-[1.2] cursor-pointer inline-flex ml-7">Back</Link>
          </form>
          
           



      </div>
    </div>
  );
};

export default StudentCreate;
