import React, { useReducer, useEffect } from "react";
import { Provider } from "react-redux";
import Homes from "../components/homes/Homes";
import Trending from "../components/trending/Trending";
import Upcoming from "../components/upcoming/Upcoming";
import { fetchUpcoming } from "../services/UpcomingServices";
import { UpcomingReducer } from "../reducers/UpcomingReducer";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import LatestMoviesCarousel from "../components/latest/latestMovie";
import HomeCard from "../components/homes/HomeCard";
import store from "../reducers/latestStore";

const HomePage = () => {
  const [upcomingMovies, dispatchUpcoming] = useReducer(UpcomingReducer, []);
  const [latestMovies, dispatchLatest] = useReducer(UpcomingReducer, []);
  const [recommendedMovies, dispatchRecommended] = useReducer(UpcomingReducer, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUpcoming();
        dispatchUpcoming({ type: "FETCH_UPCOMING", payload: data });
        dispatchLatest({ type: "FETCH_LATEST", payload: data.slice(0, 5) });
        dispatchRecommended({ type: "FETCH_RECOMMENDED", payload: data.slice(5, 10) });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Upcoming items={upcomingMovies} title="Upcoming Movies" />
      <Upcoming items={latestMovies} title="Latest Movies" />
      <Trending />
      <Upcoming items={recommendedMovies} title="Recommended Movies" />
      <LatestApp />
      <Homes />
      <Footer />
    </>
  );
};

export default HomePage;

const LatestApp = () => (
  <Provider store={store}>
    <LatestMoviesCarousel />
  </Provider>
);
