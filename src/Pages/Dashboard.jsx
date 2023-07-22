import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cardd from '../Components/Card';

const Dashboard = () => {
    const nav = useNavigate()
    const token = localStorage.getItem("FastorToken")

    const [data, setData] = useState([]);

    useEffect(() => {
        if (!token || token == null || token == undefined) {
            nav('/')

        }
        else {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,

                }
            }
            axios.get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", config)

                .then((res) =>
                    setData(res.data))

                .catch((err) => console.log(err))
        }


    }, [])

    return (
        <Box padding={"20px"}>
            {
                data?.map((item) => (
                    <div key={item.restaurant_id}>
                        <Cardd {...item} />
                    </div>
                ))
            }
        </Box>
    )
}

export default Dashboard