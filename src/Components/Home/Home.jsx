import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import img from "../../img/mac.jpeg";
import ReviewHighlights from "../ReviewHighlights/ReviewHighlights";
import "./Home.css";

const Home = () => {
  const [reviews, setReview] = useReview();
  return (
    <div>
      <div className="py-0 md:px-24 px-5 md:flex">
        <div className="flex justify-center flex-col">
          <h1 className="md:text-5xl text-2xl font-bold">TECH-LAND</h1>
          <h1 className="md:text-5xl text-2xl font-bold text-orange-500">
            Buy the best thing
          </h1>
          <p className="mt-5">
            The most powerful MacBook Pro to date is now available. With the
            lightning-fast M1 Pro or M1 Max chip – the first Apple silicon
            intended for professionals — you get incredible performance and
            battery life. Add in a gorgeous Liquid Retina XDR display, the
            greatest camera and audio on a Mac notebook, and all the ports
            you'll ever need. This MacBook Pro is a beast. It's the first
            notebook of its sort.
          </p>
          <button className="bg-orange-200 w-40 h-14 text-orange-500 font-bold rounded-md mt-4 btn">
            Demo
          </button>
        </div>
        <div className="flex align-center img-container">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="review-container ">
        <h2 className="text-4xl font-bold text-center">Customer Review</h2>
        <div className="review-highlights md:grid md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewHighlights
              key={review.id}
              review={review}
            ></ReviewHighlights>
          ))}
        </div>
      </div>
      <button className="bg-orange-200 w-40 h-10 text-orange-500 font-bold rounded-md mt-6 mx-auto block btn">
        <Link to="/reviews">See All Reviews</Link>
      </button>
    </div>
  );
};

export default Home;
