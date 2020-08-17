import React from 'react';
import { useUser, user } from '../../../store';
import { useState } from 'react';
import Axios from 'axios';
import { useRecoilValue } from 'recoil';


export default (props) => {
    const userState = useRecoilValue(user);
    const setUser = useUser();
    const [isLoaded, setIsLoaded] = useState(true);
    if (!userState && localStorage.getItem('token')) {
        Axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URI}/user/refresh`,
            data: { token: localStorage.getItem('token') }
        })
            .then(response => {
                if (!response.err) setUser({ ...response })
                setIsLoaded(false);
            })
    }
    if(isLoaded)return <h1>Loading</h1>
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}