import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import MyHeader from '../components/Header';
import Winner from './Winner';

export default function CityRoute({ city, country }) {
  const { nobels } = useSelector((store) => store.nobel);
  const winners = nobels.filter((item) => item.city === city);

  return (
    <div>
      <MyHeader stats={city} title="city nobel winners" country={country} amount={winners.length} />

      {
    winners.map(({ id }) => <Winner key={id} id={id} />)
    }
    </div>
  );
}

CityRoute.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
