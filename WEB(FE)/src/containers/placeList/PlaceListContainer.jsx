import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/common/Pagination';
import PlaceList from '../../components/places/PlaceList';
import LoadingPlaceList from '../../components/loading/LoadingPlaceList';
import { imagesList, list } from '../../modules/locations';

const PlaceListContainer = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { locations, images, loading, lastPage } = useSelector(
    ({ locations, loading }) => ({
      locations: locations.locations,
      images: locations.images,
      lastPage: locations.lastPage,
      loading: loading['locations/LIST'],
    })
  );
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const category = searchParams.get('category');
  const buildLink = ({ username, page, category }) => {
    const query = qs.stringify({ category, page });
    return username ? `@${username}?${query}` : `?${query}`;
  };

  useEffect(() => {
    dispatch(list({ category, page }));
  }, [dispatch, category, page]);

  useEffect(() => {
    if (!locations) return;
    const locationTitles = locations.map((location) => location.name);
    dispatch(imagesList(locationTitles));
  }, [locations]);

  return (
    <>
      {loading ? (
        <>
          <LoadingPlaceList />
          <Pagination page={1} lastPage={1} />
        </>
      ) : (
        locations &&
        images && (
          <>
            <PlaceList locations={locations} images={images} />
            <Pagination page={page} lastPage={lastPage} buildLink={buildLink} />
          </>
        )
      )}
    </>
  );
};

export default PlaceListContainer;
