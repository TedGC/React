import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users')


    // await pause(1000)
    return response.data;
})


// const puase = (duration) => {
//     return new Promsie((resolve) => {
//         setTimeout(resolve, duration)
//     })sqss
// }




export { fetchUsers }