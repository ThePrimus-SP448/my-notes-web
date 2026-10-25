import './App.css'
import { useState } from 'react'
import Navbar from './navbar'

function App() {

  // Stores and display the currently selected page
  // Defaulting to dashboard page and also on exiting #Version1
  
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      {/**Top Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage}/>

      {/**Main Page #to display page for the nav options selected*/}

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg-px-8 py-8'>
        {activePage === 'dashboard' && (
          <div className='bg-white p-6 rounded-lg border border-gray-200
          shadow-xs '>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>
              Dashboard
            </h1>
            <p className='text-gray-600'>Welcome to your Dashboard View.</p>
          </div>
        )}

        {activePage === 'notes' && (
          <div className='bg-white p-6 rounded-lg border border-gray-200
          shadow-xs'>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>My Notes</h1>
            <p className='text-gray-600'>
              Your Notes will be displayed here.
            </p>
          </div>
        )}

        {activePage === 'todo' && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs">
            <h1 className='text-2xl font-bold text-gray-900 mb-2'> To Do</h1>
            <p className='text-gray-600'>
              Manage your tasks and checklists here.
            </p>
          </div>
        )}

        {activePage === 'movies' && (
          <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-xs'>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>Movies/Series</h1>
            <p className='text-gray-600'>Add and remove movies or series with their details here.</p>
          </div>
        )}

        {activePage === 'exit' && (
          <div className='bg-white p-8 rounded-lg border border-gray-200 shadow-xs text-center'>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>Session Ended</h1>
            <p className='text-gray-600 mb-6'>You have exited the Application.</p>

            <button
            type='button'
            onClick={setActivePage('dashboard')}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor pointer text-sm 
            font-medium '>
              Back to Dashboard
            </button>
          </div>
        )}


      </main>


    </div>
  );
} 

export default App
