import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EditContact from './EditContact'
import API from '../service'

function ListContact( {contacts} ) {
  
  const navigate = useNavigate()
  
  const deleteHandler = contactId => {
    console.log(contactId);
    
    let userInput = window.confirm('Confirm delete?');
    if(userInput) {

      
      API.deleteContact(contactId)
       .then(() => alert('Contact has been deleted successfully'))
       .then(() => navigate(0))
        .catch(err => console.log())
    }
    
  }

  return (
    <React.Fragment>
      <div className="m-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action 2
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts?.map(contact => {
                      return (
                        <tr key={contact.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {contact.name}
                          </th>
                          <td className="px-6 py-4">
                            {contact.phoneNumber}
                          </td>
                          
                            <td className="px-6 py-4">
                              <Link to='/edit' state={{contact: contact}} element={<EditContact />} key={contact.id}>
                                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                              </Link>
                            </td>

                          <td className="px-6 py-4">
                              <a onClick={() => deleteHandler(contact.id) } className="font-medium text-red-600 dark:text-blue-500 hover:underline cursor-pointer">Delete</a>
                          </td>
                        </tr>
                      )
                    })}
                
                </tbody>
            </table>
        </div>
    </React.Fragment>
  )
}

export default ListContact