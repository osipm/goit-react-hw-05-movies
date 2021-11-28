import { useState } from 'react';

import { useEffect } from 'react/cjs/react.development';
const ImgUrl = 'https://image.tmdb.org/t/p/w200';
export default function Cast({ movieId }) {
  const [casts, setCast] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5ac3759582a29f2bcb8e74a1f0ca5fb0&language=en-US`,
    )
      .then(response => response.json())
      .then(response => setCast(response));
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts &&
          casts.cast.map(cast => (
            <li key={cast.id}>
              <img src={`${ImgUrl}${cast.profile_path}`} alt={cast.name} />
              <h3>{cast.name}</h3>
              <p>{cast.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
