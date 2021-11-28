import { useState } from 'react';
import s from './MovieDetailsPage.module.css';

import { useParams, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
const ImgUrl = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=5ac3759582a29f2bcb8e74a1f0ca5fb0&language=en-US`,
    )
      .then(response => response.json())
      .then(response => setMovie(response));
  }, [movieId]);

  return (
    <div className={s.conteiner}>
      <Link to={location?.state?.from ?? '/movies'} state={location?.state}>
        &lt; Back
      </Link>
      <div className={s.block}>
        {movie && (
          <>
            <div className={s.conteinerPage}>
              <div>
                <img
                  src={`${ImgUrl}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
              <div className={s.conteinerInfo}>
                <h2>{movie.original_title}</h2>
                <p>User Score: {movie.popularity}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul className={s.list}>
                  {movie.genres.map(genre => (
                    <li key={genre.id} className={s.item}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <AdditionalInformation movieId={movieId} />
              <Routes>
                <Route path="cast" element={<Cast movieId={movieId} />} />
                <Route path="reviews" element={<Reviews movieId={movieId} />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
