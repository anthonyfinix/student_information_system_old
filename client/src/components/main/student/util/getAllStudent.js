import axios from 'axios';
export default async ()=>{
    return await axios({
        method:'GET',
        url:`${process.env.REACT_APP_API_URI}/students/`,
    })
    .then(response=>{
        return response.data
    })

}