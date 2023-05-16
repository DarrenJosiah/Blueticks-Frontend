import React, {useState} from 'react'
import API from '../service'

// Firebase
import { addDoc } from 'firebase/firestore';

function AddContact( {usersCollectionRef} ) {

  const [enteredName, setEnteredName] = useState('')
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('')
  const [enteredNameError, setEnteredNameError] = useState('')
  const [enteredPhoneNumberError, setEnteredPhoneNumberError] = useState('')
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Setters
  function nameChangeHandler (event) {
    setEnteredName(event.target.value);
  }

  function phoneNumberChangeHandler (event) {
    setEnteredPhoneNumber(event.target.value);
  }

  // Validations
  function validate () {
    const errors = {}
   
    if (enteredName === '')
    errors.name = 'Name is mandatory.';
    
    if (enteredPhoneNumber === '')
    errors.phoneNumber = 'Phone Number is mandatory.';

    return Object.keys(errors).length === 0 ? null : errors
  }

  // Typial Firebase ADD function
  async function createContact(newContactJson) {
    await addDoc(usersCollectionRef, newContactJson)
  }

  // On Click Submit
  function submitHandler (event) {
    setSuccessMsg('');
    setErrorMsg('');

    const errors = validate();

    if (errors) {
      setEnteredNameError(errors.name);
      setEnteredPhoneNumberError(errors.phoneNumber);
    } else {
      setEnteredNameError('');
      setEnteredPhoneNumberError('');

      const newContactJson = {
        name: enteredName,
        phoneNumber: enteredPhoneNumber
      }
      
      console.log('Initiating POST');
      
      createContact(newContactJson)
        .then((res) => res)
        .then((res) => {
          // console.log(res);
          setSuccessMsg('Form has been submitted successfully')
        })
        .catch(err => {
          console.log(err);
          setErrorMsg('Error! Please try again!')
        });
      
      // addContact(newContactJson)
      // .then((res) => res)
      // .then((res) => {
      //   console.log(res);
      //   setSuccessMsg('Form has been submitted successfully')
      // })
      // .catch(err => {
      //   console.log(err);
      //   setErrorMsg('Error! Please try again!')
      // });

    // fetch(`http://127.0.0.1:8000/api/contacts/`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify( newContactJson )
    //   }).then(res => res.json())
    //     .then((res) => {
    //       console.log(res.phone_number[0]);
    //       if (res.phone_number[0] === 'Ensure this value is less than or equal to 100000000.') {
    //         console.log('yes');
    //         setErrorMsg('Ensure this value is less than or equal to 100000000.');
    //       } else {
    //         setSuccessMsg('Form has been submitted successfully')
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err)
    //       // setErrorMsg('Error! Please try again!')
    //     })
      


      // Clear form fields
      setEnteredName('');
      setEnteredPhoneNumber('');

    }
    event.preventDefault();
  }

  return (
    <div className="m-8 sm:rounded-lg">

      {/* Success Msg */}
      { successMsg &&
        <div className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
          <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{ successMsg }</span> 
          </div>
        </div>
      }

      {/* Error Msg */}
      { errorMsg &&
        <div className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{ errorMsg }</span>
          </div>
        </div>
      }

      {/* Form */}
        <form onSubmit={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input value={enteredName} onChange={nameChangeHandler} className={`${enteredNameError && "border border-red-500"} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`} id="name" type="text" placeholder="eg. Jeff" />
            <div className='mt-3 text-red-500 text-sm'>{enteredNameError}</div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input value={enteredPhoneNumber} onChange={phoneNumberChangeHandler} className={`${enteredPhoneNumberError && "border border-red-500"} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`} id="phoneNumber" type="number" placeholder="eg. 81234567" />
            <div className='mt-3 text-red-500 text-sm'>{enteredPhoneNumberError}</div>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Contact
            </button>
          </div>
        </form>
      </div>
  )
}

export default AddContact