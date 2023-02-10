import TextField from "../../Components/TextField";
import Button from "../../Components/Button";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"
import {useSelector, useDispatch } from 'react-redux'
import { editUser } from "./userSlice";

function EditUser(props) {
    const {userId} = useParams()
    const dispatch = useDispatch()
    const users = useSelector(store => store.users)
    const existingUser = users.find((user) => user.id == userId);
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: existingUser.name,
        email: existingUser.email
    })

    const handleEditUser = () => {
        setValues({name:'', email: ''})
        console.log(existingUser)
        dispatch(editUser({
            id: userId,
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }

    return ( 
        <div className="mt-10 max-w-xl mx-auto">
            <TextField 
            label="Name"
            value={values.name}
            onChange={(e) => setValues({...values, name: e.target.value})}
            inputProps={{type:'text', placeholder: 'Your name'}}
            />
            <br />
            <TextField 
            label="Email"
            value={values.email}
            onChange={(e) => setValues({...values, email: e.target.value})}
            inputProps={{type:'email', placeholder: 'Your email'}}
            />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
     );
}

export default EditUser;