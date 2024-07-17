import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setMessage(response.data);
        };

        fetchData();
    }, []);

    return <div>{message}</div>;
};

export default Home;
