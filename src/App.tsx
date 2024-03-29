import React, { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const DotaHeroesComponent: React.FC = () => {
    const [heroes, setHeroes] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const options: AxiosRequestConfig = {
                method: 'GET',
                url: 'https://dota-2-heroes1.p.rapidapi.com/Dota/Heroes',
                headers: {
                    Authorization: '<REQUIRED>',
                    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                    'X-RapidAPI-Host': 'dota-2-heroes1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setHeroes(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dota Heroes</h1>
            <ul>
                {heroes.map(hero => (
                    <li key={hero.name}>{hero.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DotaHeroesComponent;
