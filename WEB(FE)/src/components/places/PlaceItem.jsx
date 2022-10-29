import { Link } from 'react-router-dom';
import LoadingPlaceItem from '../loading/LoadingPlaceItem';

const PlaceItem = ({ name, location, image }) => {
  const category =
    location.category && location.category.length > 5
      ? `${location.category.slice(0, 10)}...`
      : `${location.category}`;
  const categoryObject = {
    location: category,
    mou: location.region,
    tmo: '',
  };
  if (image) {
    return (
      <Link to={`${location.id}`} className='group '>
        <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
          <img
            src={
              image[0]?.thumbnail_url ||
              'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
            }
            alt={location.imageAlt}
            className='h-full w-full object-cover object-center group-hover:opacity-75'
          />
        </div>
        <h3 className='mt-4 text-lg text-gray-900  group-hover:text-gray-400'>
          {name === 'tmo' ? `${location.name}역` : `${location.name}`}
          <span className='ml-2 text-sm text-gray-600  group-hover:text-gray-300'>
            {categoryObject[name]}
          </span>
        </h3>
        <p className='mt-1 text-sm font-normal text-gray-900   group-hover:text-gray-400'>
          <span>{location.address}</span>
        </p>
        <p className='mt-1 text-sm font-normal text-gray-900  group-hover:text-gray-400'>
          <span>{location.number}</span>
        </p>

        <p className='mt-1 text-lg font-medium text-blue-400 group-hover:text-blue-200'>
          {location.benefit || location.pstnexpln}
        </p>
      </Link>
    );
  } else {
    return <LoadingPlaceItem />;
  }
};

export default PlaceItem;
