import IMAGES, { BackIcon, MicroIcon, SettingIcon } from "@/container";
import { Dispatch, SetStateAction } from "react";



export default function MyHeader({
  stats, title, country, amount, setShowAll, setShowNation, setShowCity, setCountry
}: {
  stats: String,
  title: String,
  country: String,
  amount: Number | 0,
  setShowAll: Dispatch<SetStateAction<Boolean>>,
  setShowNation: Dispatch<SetStateAction<Boolean>>,
  setShowCity: Dispatch<SetStateAction<Boolean>>,
  setCountry: Dispatch<SetStateAction<String>>
}) {
  const style = title.includes('country') ? { alignItems: 'flex-end' }
    : { alignItems: 'flex-start' };

  
  const handleBack = () => {
    if (title.includes('Nation')) {
      // From Nation => Show the World Nobelists
      setShowNation(false)
      setShowAll(true)
      setCountry('THE WORLD')
    } else {
      // From City Nobelists => the Nation Nobelists
      setShowCity(false)
      setShowNation(true)
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
          width={100}
          src={IMAGES[country.toLowerCase().replace(' ', '')].src}
          alt="nation map"
          className="header-image"
        />
        <div className="header-location" style={style}>
          <h2>{country.toUpperCase()}</h2>
          <p>
            {`${amount} nobelists`}
          </p>
        </div>
      </div>

      <div className="header-stats">{stats.toUpperCase()}</div>

    </div>
  );
}
