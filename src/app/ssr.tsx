import axios from "axios";

const API_NOBEL = 'https://api.nobelprize.org/2.1/laureates';


function filterData (data: any)  {
  const res = data.laureates.map((item: any) => {
    const { id, fullName: { en: fullname }, gender } = item;
    const { date } = item.birth;
    const { en: city } = item.birth.place?.cityNow || { en: 'Unknown' };
    const { en: country } = item.birth.place?.countryNow || { en: 'Unknown' };

    const {
      awardYear,
      categoryFullName: { en: category },
      prizeAmount: prize,
    } = item.nobelPrizes[0];

    return {
      id, fullname, gender, date, city, country, awardYear, category, prize,
    };
  });

  return res;  
}


export async function getNobelists () {
  try {
    
    const res = await axios.get(API_NOBEL);
    
    return filterData(res.data);
  } catch (err) {
    return err
  } 
}