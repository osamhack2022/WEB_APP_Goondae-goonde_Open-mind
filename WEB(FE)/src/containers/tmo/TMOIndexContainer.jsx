import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/common/Pagination';
import PlaceList from '../../components/places/PlaceList';
import LoadingPlaceList from '../../components/loading/LoadingPlaceList';
import { imagesList, list } from '../../modules/tmos';

const TMOIndexContainer = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { tmos, images, loading, lastPage } = useSelector(
    ({ tmos, loading }) => ({
      tmos: tmos.tmos,
      images: tmos.images,
      lastPage: tmos.lastPage,
      loading: loading['locations/LIST'],
    })
  );
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const buildLink = ({ username, page, category }) => {
    const query = qs.stringify({ category, page });
    return username ? `@${username}?${query}` : `?${query}`;
  };

  useEffect(() => {
    dispatch(list({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (!tmos) return;
    const locationTitles = tmos.map((location) => `${location.name}역`);
    console.log(locationTitles);
    dispatch(imagesList(locationTitles));
  }, [tmos]);

  return (
    <>
      {loading ? (
        <>
          <LoadingPlaceList />
          <Pagination page={1} lastPage={1} />
        </>
      ) : (
        tmos &&
        images && (
          <>
            <PlaceList name='tmo' locations={tmos} images={images} />
            <Pagination page={page} lastPage={lastPage} buildLink={buildLink} />
          </>
        )
      )}
    </>
  );
};

export default TMOIndexContainer;
