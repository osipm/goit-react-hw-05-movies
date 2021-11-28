import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import s from './MoviePage.module.css';
export default function MoviesPage() {
  const from = useLocation();
  const [searchMovie, setSearchMovie] = useState('');
  const [arrayMovie, setArrayMovie] = useState([]);
  const [prevSearchMovie, setPrevSearchMovie] = useState('');

  const handleNameChange = event => {
    setSearchMovie(event.currentTarget.value.toLowerCase());
  };

  const request = search =>
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5ac3759582a29f2bcb8e74a1f0ca5fb0&language=en-US&query=${search}&page=1&include_adult=false`,
    )
      .then(response => response.json())
      .then(response => {
        setArrayMovie(response.results);
      });

  const handleSubmit = event => {
    event?.preventDefault?.();
    if (searchMovie.trim() === '') {
      return alert('Введіть назву картинки');
    }
    setPrevSearchMovie(searchMovie);

    request(searchMovie);

    setSearchMovie('');
  };

  useEffect(() => {
    if (from.state?.prevSearchMovie) {
      request(from.state?.prevSearchMovie);
    }
  }, []);

  return (
    <div className={s.conteiner}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchMovie}
          onChange={handleNameChange}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <ul>
        {arrayMovie.map(name => (
          <li key={name.id}>
            <Link to={`/movies/${name.id}`} state={{ from, prevSearchMovie }}>
              {name.title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
