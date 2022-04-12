import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    const url = "review.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [reviews, setReview];
};
export default useReview;
