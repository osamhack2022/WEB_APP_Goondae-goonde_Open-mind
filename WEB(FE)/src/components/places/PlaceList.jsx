import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PlaceItem from './PlaceItem';

const PlaceList = ({ name, locations, images }) => {
  const [h2, setH2] = useState({});
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  console.log(category);
  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'));
    setH2({
      location: '군 혜택',
      mou: 'MOU 혜택',
      LikeMOU: `${userStorage?.username || 'user'}의 MOU 혜택`,
      tmo: 'TMO',
      LikeLocation: `${userStorage?.username || 'user'}의 군 혜택 `,
    });
  }, []);

  return (
    <div className='bg-white min-h-[64.5vh]'>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='mb-5 font-bold text-2xl'>
          {category ? `⭐️ ${h2[name]} / ${category}` : `⭐️ ${h2[name]}`}
        </h2>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 '>
          {locations.map((location, index) => (
            <PlaceItem
              name={name}
              key={location.name}
              location={location}
              image={images[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceList;
