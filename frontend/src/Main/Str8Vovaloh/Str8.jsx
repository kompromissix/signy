import './Str8.scss';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Str8() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('Unauthorized: Токен отсутствует');
                return;
            }

            try {
                const decodedToken = jwtDecode(token);
                console.log('Декодированный токен:', decodedToken);

                if (!decodedToken.id) {
                    setError('Ошибка: userId не найден в токене');
                    return;
                }

                const response = await axios.get(`http://localhost:5000/users/${decodedToken.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('Ответ сервера:', response.data);

                if (!response.data) {
                    setError('Ошибка: данные пользователя не получены');
                    return;
                }

                setUserData(response.data);
            } catch (err) {
                console.error('Ошибка при запросе данных пользователя:', err);
                setError(err.message);
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="dashboard">
                <div className='ukyerg'>
                    <Link to='/Str1'><button className='mtrnt'>close</button></Link>
                    <h1>Личный кабинет</h1>
                    <div className='danse'>
                    <p>Юзер Йоу: {userData[0] ? userData[0].username : 'N/A'}</p>
                    <p>Mail: {userData[0] ? userData[0].email : 'N/A'}</p>
                        <p><strong>Имя пользователя:</strong> {userData.username}</p>
                    </div>
                </div>
            </div>
        </>
    );
}