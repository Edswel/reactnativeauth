import axios from 'axios';

const API_KEY = 'AIzaSyDo5DX9jp7I37Mxx-A7hbp6VGj3jVfgmiM';

async function createUser(email, password) {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}