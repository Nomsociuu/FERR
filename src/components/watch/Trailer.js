import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Upcomming from "../upcoming/Upcomming";

const Trailer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [rec, setRec] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      // Fetching item data from json-server
      const response = await fetch(`http://localhost:3000/homeData/${id}`);
      if (response.ok) {
        const data = await response.json();
        setItem(data);
      } else {
        console.error("Failed to fetch item data");
      }
    };

    const fetchRecommended = async () => {
      // Fetching recommended data from json-server
      const response = await fetch(`http://localhost:3000/recommended`);
      if (response.ok) {
        const data = await response.json();
        setRec(data);
      } else {
        console.error("Failed to fetch recommended data");
      }
    };

    fetchItem();
    fetchRecommended();
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              <video src={item.video} controls></video>
              <div className='para'>
                <h3>Date : {item.date}</h3>
                <p>{item.desc}</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
              </div>
              <div className='soical'>
                <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title='Recommended Movies' />
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default Trailer;
