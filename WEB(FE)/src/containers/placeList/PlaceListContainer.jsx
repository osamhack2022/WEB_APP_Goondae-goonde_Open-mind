import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlaceList from '../../components/places/PlaceList';
import { products } from '../../lib/fakeData/products';
import { list } from '../../modules/locations';

const PlaceListContainer = () => {
  const dispatch = useDispatch();
  const { locations, loading } = useSelector(({ locations, loading }) => ({
    locations: locations.locations,
    loading: loading['location/LIST'],
  }));

  useEffect(() => {
    dispatch(list());
  }, [dispatch]);

  console.log(locations, loading);
  return <PlaceList products={products} />;
};

export default PlaceListContainer;
