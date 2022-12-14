import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/common/Pagination';
import PlaceList from '../../components/places/PlaceList';
import LoadingPlaceList from '../../components/loading/LoadingPlaceList';
import { imagesList, list } from '../../modules/locations';
import { useState } from 'react';

const PlaceListContainer = () => {
  const [searchParams] = useSearchParams();
  const [isLikePK, setIsLikePK] = useState(false);
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
  const likePK = searchParams.get('like');
  const buildLink = ({ username, page, category, like }) => {
    const query = qs.stringify({ category, page, like });
    return username ? `@${username}?${query}` : `?${query}`;
  };

  useEffect(() => {
    if (likePK) setIsLikePK(true);
    else setIsLikePK(false);
    dispatch(list({ category, page, likePK }));
  }, [dispatch, category, page, likePK]);

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
            <PlaceList
              name={isLikePK ? 'LikeLocation' : 'location'}
              locations={locations}
              images={images}
            />
            <Pagination page={page} lastPage={lastPage} buildLink={buildLink} />
          </>
        )
      )}
    </>
  );
};

export default PlaceListContainer;
