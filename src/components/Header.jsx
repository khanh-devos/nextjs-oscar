import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import IMAGES, { BackIcon, MicroIcon, SettingIcon } from '../container';

export default function MyHeader({
  stats, title, country, amount,
}) {
  const style = title.includes('country') ? { alignItems: 'flex-end' }
    : { alignItems: 'flex-start' };

  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    if (title.includes('city')) {
      navigate(`/${country}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="header">
      <div className="header-top-line">
        <button
          type="button"
          className="header-back-btn"
          onClick={handleBack}
        >
          <BackIcon />
        </button>
        <p>{title}</p>
        <div className="header-icon-container">
          <MicroIcon />
          <SettingIcon />
        </div>
      </div>

      <div className="header-grid">
        <img
          src={IMAGES[country.toLowerCase().replace(' ', '')]}
          alt="nation map"
          className="header-image"
        />
        <div className="header-location" style={style}>
          <h2>{country.toUpperCase()}</h2>
          <p>
            {amount}
            {' '}
            nobelists
          </p>
        </div>
      </div>

      <div className="header-stats">{stats.toUpperCase()}</div>

    </div>
  );
}

MyHeader.propTypes = {
  country: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
