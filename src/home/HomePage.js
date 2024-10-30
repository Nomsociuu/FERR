import React, { useReducer, useEffect } from "react";
import Homes from "../components/homes/Homes";
import Trending from "../components/trending/Trending";
import Upcoming from "../components/upcoming/Upcoming";
import { fetchUpcoming } from "../services/UpcomingServices";
import { UpcomingReducer } from "../reducers/UpcomingReducer";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const HomePage = () => {
  const [upcomingMovies, dispatchUpcoming] = useReducer(UpcomingReducer, []);
  const [latestMovies, setLatestMovies] = useReducer(UpcomingReducer, []);
  const [recommendedMovies, setRecommendedMovies] = useReducer(
    UpcomingReducer,
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUpcoming();
        dispatchUpcoming({ type: "FETCH_UPCOMING", payload: data });
        setLatestMovies({ type: "FETCH_UPCOMING", payload: data.slice(0, 5) }); // Mocking for latest
        setRecommendedMovies({
          type: "FETCH_UPCOMING",
          payload: data.slice(5, 10),
        }); // Mocking for recommended
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {/* <Homes /> */}
      <Upcoming items={upcomingMovies} title="Upcoming Movies" />
      <Upcoming items={latestMovies} title="Latest Movies" />
      <Trending />
      <Upcoming items={recommendedMovies} title="Recommended Movies" />
      
      <Footer />
    </>
  );
};

export default HomePage;
