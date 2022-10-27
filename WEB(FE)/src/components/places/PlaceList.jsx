import PlaceItem from './PlaceItem';
const h2 = {
  location: '군 혜택',
  mou: 'MOU 혜택',
  tmo: 'TMO',
};
const PlaceList = ({ name, locations, images }) => {
  return (
    <div className='bg-white min-h-[64.5vh]'>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='mb-5 font-bold text-2xl'>{`⭐️ ${h2[name]}`}</h2>
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
