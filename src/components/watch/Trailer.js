import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import Upcoming from "../upcoming/Upcoming";
import "./style.css";

const Trailer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [rec, setRec] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:3000/homeData/${id}`);
      if (response.ok) {
        const data = await response.json();
        setItem(data);
      } else {
        console.error("Failed to fetch item data");
      }
    };

    const fetchRecommended = async () => {
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

  // Share functions
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(item.name)}`;
    window.open(url, "_blank");
  };

  return (
    <Container className="mt-4">
      {item ? (
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.time} | HD
            </Card.Subtitle>
            <video className="w-100" src={item.video} controls></video>
            <Card.Text className="mt-3">{item.desc}</Card.Text>
            <Button variant="primary" onClick={shareOnFacebook} className="mr-2">Share on Facebook</Button>
            <Button variant="info" onClick={shareOnTwitter}>Share on Twitter</Button>
          </Card.Body>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
      <h2 className="mt-4">Recommended Movies</h2>
      <Upcoming items={rec} title='Recommended Movies' />
    </Container>
  );
};

export default Trailer;
