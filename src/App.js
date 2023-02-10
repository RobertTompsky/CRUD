import './App.css';
import UserList from './Features/Users/UserList';
import { Routes, Route } from 'react-router-dom'
import AddUser from './Features/Users/AddUser';
import EditUser from './Features/Users/EditUser';

function App(props) {
  
  return (
    <div className="container mx-auto px-4 max-w-5xl pt-2 pb-4 md:pt-4 bg-slate-200">
      <h1 className='text-center font-bold text-2xl text-gray-700 mb-4'>VADIM CRUD/REDUX TOOLKIT/TAILWIND</h1>
      <Routes>
        <Route path='/' element={<UserList 
        {...props} 
        />}/>,
        <Route path='/add-user' element={<AddUser />} />
        <Route path={'/edit-user/:userId'} element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
