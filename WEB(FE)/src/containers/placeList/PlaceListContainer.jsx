import PlaceList from '../../components/places/PlaceList';
import { products } from '../../lib/fakeData/products';

const PlaceListContainer = () => {
  return <PlaceList products={products} />;
};

export default PlaceListContainer;
