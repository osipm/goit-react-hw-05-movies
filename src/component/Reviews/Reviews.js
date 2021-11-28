import { useState } from 'react';

import { useEffect } from 'react';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5ac3759582a29f2bcb8e74a1f0ca5fb0&language=en-US&page=1`,
    )
      .then(response => response.json())
      .then(response => setReviews(response.results));
  }, [movieId]);
  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews && (
        <ul>
          {reviews.map(result => (
            <li key={result.id}>
              <h3>Autor: {result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
