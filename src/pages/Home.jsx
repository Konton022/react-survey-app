import React, { useEffect, useState } from "react";
import Forms from "../components/Forms";
import ListItems from "../components/ListItems";
import { db, pushSurvey, subscribeSurvey } from "../firebase";

const Home = () => {
  const [value, setValue] = useState([]);
  
  const addSurveyData = (data) => {
    pushSurvey(db, data)
  }


  useEffect(() => {
    subscribeSurvey(setValue)
  }, []);


  return (
    <div className="mx-12">
        <Forms addSurveyData={addSurveyData} />
        <ListItems value={value} />
    </div>
  );
};

export default Home;
