import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import API from '../service'

function EditContact() {

   // Unpack from ListContact
   const { state: { contact } = {} } = useLocation();
  //  console.log(contact.id + contact.name + contact.phone_number);

    const [enteredName, setEnteredName] = useState(contact.name)
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState(contact.phone_number)
    const [enteredNameError, setEnteredNameError] = useState('')
    const [enteredPhoneNumberError, setEnteredPhoneNumberError] = useState('')
   
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
  
    // On Click Submit
    function submitHandler (event) {
  
      const errors = validate();
  
      if (errors) {
        setEnteredNameError(errors.name);
        setEnteredPhoneNumberError(errors.phoneNumber);
      } else {
        setEnteredNameError('');
        setEnteredPhoneNumberError('');
  
        const newContact = {
          name: enteredName,
          phone_number: enteredPhoneNumber
        }
        
        console.log('Initiating PUT');

        dummyJson.push(newContact);
        console.log(dummyJson);
  
        // API.updateContact(contact.id, newContact)
        // .then(res => console.log(res))
        // .then(() => alert('Contact has been edited successfully'))
        // .catch(err => console.log())
        
        console.log(newContact);
  
      }
      event.preventDefault();
    }

    return (
        <div className="m-8 sm:rounded-lg">
          {/* <div className="m-8 w-full max-w-xs"> */}
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
                <input value={enteredPhoneNumber} onChange={phoneNumberChangeHandler} className={`${enteredPhoneNumberError && "border border-red-500"} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`} id="phoneNumber" type="number" placeholder="eg. 8999 9999" />
                <div className='mt-3 text-red-500 text-sm'>{enteredPhoneNumberError}</div>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Edit Contact
                </button>
              </div>
            </form>
          </div>
      )
}

export default EditContact