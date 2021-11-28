import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Navigation from './component/navigation/navigation';

const HomePage = lazy(() => import('./component/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./component/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./component/MovieDetailsPage/MovieDetailsPage'),
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Navigation />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
