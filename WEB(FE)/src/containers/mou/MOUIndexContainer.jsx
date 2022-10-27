import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/common/Pagination';
import PlaceList from '../../components/places/PlaceList';
import LoadingPlaceList from '../../components/loading/LoadingPlaceList';
import { imagesList, list } from '../../modules/mous';

const MOUIndexContainer = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { mous, images, loading, lastPage } = useSelector(
    ({ mous, loading }) => ({
      mous: mous.mous,
      images: mous.images,
      lastPage: mous.lastPage,
      loading: loading['mous/LIST'],
    })
  );
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const category = searchParams.get('category');
  const buildLink = ({ username, page, category }) => {
    const query = qs.stringify({ category, page });
    return username ? `@${username}?${query}` : `?${query}`;
  };

  useEffect(() => {
    const likePK = searchParams.get('like');
    dispatch(list({ category, page, likePK }));
  }, [dispatch, category, page]);

  useEffect(() => {
    if (!mous) return;
    const locationTitles = mous.map((location) => location.name);
    dispatch(imagesList(locationTitles));
  }, [mous]);

  return (
    <>
      {loading ? (
        <>
          <LoadingPlaceList />
          <Pagination page={1} lastPage={1} />
        </>
      ) : (
        mous &&
        images && (
          <>
            <PlaceList name='mou' locations={mous} images={images} />
            <Pagination page={page} lastPage={lastPage} buildLink={buildLink} />
          </>
        )
      )}
    </>
  );
};

export default MOUIndexContainer;
