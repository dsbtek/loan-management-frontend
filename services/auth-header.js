export default function authHeader() {
    // return authorization header with jwt token
    const token = JSON.parse(localStorage.getItem('token'));

    const header = {'Content-Type': 'application/json' };
    if (token) { 
        header.Authorization =  `Bearer ${token}`;
    }
    return header;
}