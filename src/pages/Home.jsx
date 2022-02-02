
import React, {useEffect, useState} from 'react';
import db, { getSurveys } from '../firebase'
import Input from '../components/Input';

const Home = () => {

    const [value, setValue] = useState([]);
   
    useEffect(()=> {
        getSurveys(db).then((data => setValue(data)))
       
    }, [])

    return <div>

<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Input /> 
            {!value.length? <div>loading...</div>: value.length}
            
        </div>
    
}

export default Home;



