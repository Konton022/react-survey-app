import React, { useEffect, useState } from "react";
import db, { getSurveys } from "../firebase";
import Forms from "../components/Forms";

const Home = () => {
  const [value, setValue] = useState([]);
  

  useEffect(() => {
    getSurveys(db).then((data) => setValue(data));
  }, []);


  return (
    <div>
        {!value.length ? <div>loading...</div> : value.length}
          <Forms  />
    </div>
  );
};

export default Home;
