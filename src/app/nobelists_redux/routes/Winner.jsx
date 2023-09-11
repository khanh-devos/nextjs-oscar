import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

export default function Winner({ id }) {
  const { nobels } = useSelector((store) => store.nobel);
  const {
    fullname, city, date, awardYear,
  } = nobels.find((item) => item.id === id);

  return (
    <div className="winners">
      <h3>
        Name
        {' : '}
        {fullname}
      </h3>
      <h3>
        City
        {' : '}
        {city}
      </h3>
      <h3>
        BirthDate
        {' : '}
        {date}
      </h3>
      <h3>
        Awarded Year
        {' : '}
        {awardYear}
      </h3>
      <p>--------------------</p>
    </div>
  );
}

Winner.propTypes = {
  id: PropTypes.string.isRequired,
};
