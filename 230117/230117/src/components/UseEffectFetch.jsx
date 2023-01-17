import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProfileComponents from './ProfileComponents';

export default function UseEffectFetch() {
    const [dataArr, setDataArr ] = useState([]);

    async function fetchData() {
        const resFetch = await axios.get('http://localhost:4000');

        if(resFetch.status !==200) return alert('통신에러');

        const data = resFetch.data;

        setDataArr(data);
        console.log(data);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    return <div>
        {dataArr.map((el,index)=> {
        return (
        <ProfileComponents key={index} name={el.name} age={el.age} nickName={el.nickName}/>);
    })}</div>      
}