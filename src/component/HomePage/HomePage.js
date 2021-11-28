import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './HomePage.module.css';

export default function HomePage() {
  const from = useLocation();
  const [homePage, setHomePage] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=5ac3759582a29f2bcb8e74a1f0ca5fb0`,
    )
      .then(response => response.json())
      .then(response => {
        setHomePage(response.results);
      });
    //   .then(console.log);
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {homePage &&
          homePage.map(name => (
            <li key={name.id}>
              <Link
                to={`/movies/${name.id}`}
                state={{ from }}
                className={s.link}
              >
                {name.title}{' '}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
