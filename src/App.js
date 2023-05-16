import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';
import dummyJson from './dummyJson.json'

import Navbar from './components/Navbar';
import ListContact from './components/ListContact';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

// Firebase
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {

  const [contacts, setContacts] = useState([]);
  const usersCollectionRef = collection(db, 'contacts');

  

  useEffect(()=> {
    // Typial Firebase READ function
    const getContacts = async () => {
      const data = await getDocs(usersCollectionRef);
      setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getContacts();

  //   fetch('http://127.0.0.1:8000/api/contacts/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   }).then(res => res.json())
  //   .then(result => {
  //     setContacts(result);
  //     console.log('result = ' + JSON.stringify(result));
  //   })
  //   .catch(err => console.log(err))
  }, [])

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<ListContact contacts={contacts} usersCollectionRef={usersCollectionRef} />} />
            <Route path='/edit' element={<EditContact />} />
            <Route path='/add' element={<AddContact usersCollectionRef={usersCollectionRef}/>} />
        </Routes>
    </div>
  );
}

export default App;
