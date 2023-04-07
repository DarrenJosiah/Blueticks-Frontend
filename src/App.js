import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';
import dummyJson from './dummyJson'

import Navbar from './components/Navbar';
import ListContact from './components/ListContact';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';



function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/contacts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(result => {
      setContacts(result);
      console.log('result = ' + JSON.stringify(result));
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<ListContact contacts={contacts} />} />
            <Route path='/edit' element={<EditContact />} />
            <Route path='/add' element={<AddContact />} />
        </Routes>
    </div>
  );
}

export default App;
