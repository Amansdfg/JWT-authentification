import axios from 'axios';
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        if(error.response.status === 403){
            console.log("403")
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axios;