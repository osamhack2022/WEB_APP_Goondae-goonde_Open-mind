import Place from '../../components/place/Place';
import { product, reviews } from '../../lib/fakeData/product';

const PlaceContainer = () => {
  return <Place product={product} reviews={reviews} />;
};

export default PlaceContainer;
