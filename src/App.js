import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import play from "./assets/images/Play.svg";
import apple from "./assets/images/apple.png";
import right from "./assets/images/right.png";
import imbd from "./assets/images/imbd.png";
import Footer from "./components/footer";
import Card from "./components/card";

function App() {
  const [data, setData] = useState([]);
  let result;
  let final;
  const auth = process.env.REACT_APP_AUTH
  const url = "https://api.themoviedb.org/3/movie/top_rated";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:auth
    },
  };
  async function fetchdata() {
    try{
      result = await axios.get(url, options);
      final = await result.data;
      console.log(result.data.results);
      setData(final.results);
      
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <div className="carousel-home">
        <Header />
        <div className="intro">
          <div className="intro-body">
            <h1 className="intro-heading">John Wick 3 : Parabellum</h1>
            <div className="intro-rating">
              <div className="movie-rating">
                <img
                  src={imbd}
                  alt="movie-rating-image"
                  className="rating-img"
                />
                <span className="rating-text">87/100</span>
              </div>
              <div className="watch-rate">
                <img
                  src={apple}
                  alt="movie-rating-image"
                  className="rating-img"
                />
                <span className="rating-text">97%</span>
              </div>
            </div>
            <p className="intro-text">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <div className="intro-btn-wrapper">
              <button className="intro-btn">
                <span className="btn-icon-span">
                  <img src={play} alt="btn-icon" />
                </span>
                Watch trailer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="top-movies">
        <div className="heading-wrapper">
        <h1 className="heading">Features</h1>
        <h1 className="more-link">See more <span><img src={right} className="more-icon" alt="more icon"/></span></h1>
        </div>
      </div>
      <div className="cards-home">
      {Array.from(data).length > 0 ? (
    Array.from(data).slice(0, 10).map((item, key) => (
      <Card movie={item} key={key + item.original_language} />
    ))
  ) : (
    <img className="fallback" src="" alt="fallback image" />
  )} 
      </div>
      <Footer />
    </div>
  );
}

export default App;
