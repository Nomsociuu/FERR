import React, { useState, useEffect } from "react";
import Home from "./Home"; // Import the Home component

const Homes = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/homeData"); // URL to your json-server
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className="home">
                <Home items={items} />
            </section>
            <div className="margin"></div> {/* Ensure this class is styled in home.css */}
        </>
    );
};

export default Homes;
