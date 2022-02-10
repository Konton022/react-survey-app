import React, { useEffect, useState } from "react";
import Forms from "../components/Forms";
import { db, pushSurvey, subscribeData } from "../firebase";

const Home = () => {
  const [value, setValue] = useState({});
  
  const addSurveyData = (data) => {
    pushSurvey(db, data)
  }


  useEffect(() => {
    setValue(subscribeData(db, 'surveys'))
  }, []);


  return (
    <div>
        <Forms addSurveyData={addSurveyData} />
    </div>
  );
};

export default Home;
