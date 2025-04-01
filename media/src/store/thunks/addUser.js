import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://localhost:3005/users', {
        name: faker.name.fullName(),
    });

    return response.data;
});

export { addUser };



/**
 *  creating an async thunk
 * 
 * 1. create a new ifle for your thunk. Name it after the purpose of the rquest
 * 2. create the thunk. Give it a base type that describes the purpose of the request
 * 3. in the thunk, make the request, return the data that you want to use in the reducer 
 * 4. in the slice, add extraReducers, watching for the action types made by the thunk
 * 5. exxport the thunk from the sotre/index.js file
 * 
 *  */