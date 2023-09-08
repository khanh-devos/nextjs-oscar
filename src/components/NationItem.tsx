import IMAGES, { ArrowCircleRightIcon } from '../container';

export default function NationItem({ 
  country, count, index 
  } : {
  country: String, count: String, index: Number
  }
) {
  

  const arr: Array<Number> = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20, 23];
  const style = arr.includes(index)
    ? { background: '#ec4c8b' }
    : { };

  // console.log(country.toLowerCase().replace(' ', ''));
  console.log(IMAGES[country.toLowerCase().replace(' ', '')].src);

  return (
    <div className="nation-item-circle-right-arrow-icon">
      <ArrowCircleRightIcon />
      
      <img width={20} src={IMAGES[country.toLowerCase().replace(' ', '')].src} alt="nation map" className="" />
      
      <div className="nation-item-text">
        <h3>{country.toUpperCase()}</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}

