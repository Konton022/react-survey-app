
import React, {useEffect, useState} from 'react';
import db, { getSurveys } from '../firebase'


const Home = () => {

    const [value, setValue] = useState([]);
   
    useEffect(async ()=> {
       const surv = await getSurveys(db)
       setValue(surv)
    }, [])

    return <div>
            {!value.length? <div>loading...</div>: value.length}
            
        </div>
    
}

export default Home;



