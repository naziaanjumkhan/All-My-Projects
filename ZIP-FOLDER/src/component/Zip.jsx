import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import React from 'react'

const Zip = () => {

  const createZip= async (e)=>{
    try {

      const zip = new JSZip()
     const files =  e.target.files
     Array.from(files).forEach((file)=>{
      zip.file(file.name, file)
     })
    const blob = await zip.generateAsync({type : "blob"})
    saveAs(blob, "compressed.zip")
    } catch (error) {
      console.log("Error-",error.message)
    }
  }
  return (
    <div className='bg-gray-300 h-screen flex items-center justify-center'>
    <div className='bg-white shadow-lg rounded-2xl p-8 w-lg'>
    <h1 className='text-4xl font-semibold'>Create Zip</h1>
    <input type='file' multiple className='border bg-blue-700 rounded-lg p-3 mt-4 text-white font-medium hover:bg-blue-600 transition duration-200 active:scale-80'
    onChange={createZip}
    />
    </div>
      
    </div>
  )
}

export default Zip
