import { NavLink } from 'react-router-dom';
import s from './AdditionalInformation.module.css';
export default function AdditionalInformation({ movieId }) {
  //   const { movieId } = useParams();
  return (
    <>
      <h3>Additional information</h3>
      <ul className={s.conteiner}>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </>
  );
}
