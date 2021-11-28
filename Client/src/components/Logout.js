import React, { useEffect,useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { UserContext } from '../App';
import swal from 'sweetalert';


const Logout = () => {

    const {state,dispatch} = useContext(UserContext);

   const history = useHistory();
    useEffect(() => {

        fetch('/logout',{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    }).then((res) => {
        dispatch({type:'USER',payload:false});
        swal(
            'Successfully Logged Out!',
            'Visit Again!',
            'success'
          )
        history.push('/signin');

    }).catch((err) => {
        console.log(err);
    })

});

    return (
        <>
       
        </>
    )
};

export default Logout;