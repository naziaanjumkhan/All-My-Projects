import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StudentTable from './components/StudentTable'
import StudentEdit from './components/StudentEdit'
import StudentView from './components/StudentView'
import StudentCreate from './components/StudentCreate'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<StudentTable/>}></Route>
    <Route path='/student/create' element={<StudentCreate/>}></Route>
    <Route path='/student/edit/:studentid' element={<StudentEdit/>}></Route>
    <Route path='/student/view/:studentid' element={<StudentView/>}></Route>
{/*<Route path='/student/delete/:studentid' element={<StudentDelete/>}></Route>*/}
    </Routes>
    </BrowserRouter>
    </div>  
  )
}

export default App