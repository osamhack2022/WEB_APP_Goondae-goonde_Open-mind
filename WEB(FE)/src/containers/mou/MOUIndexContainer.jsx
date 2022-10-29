import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/common/Pagination';
import PlaceList from '../../components/places/PlaceList';
import LoadingPlaceList from '../../components/loading/LoadingPlaceList';
import { imagesList, list } from '../../modules/mous';

const MOUIndexContainer = () => {
  const [searchParams] = useSearchParams();
  const [isLikePK, setIsLikePK] = useState(false);

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
  const likePK = searchParams.get('like');
  const buildLink = ({ username, page, category, like }) => {
    const query = qs.stringify({ category, page, like });
    return username ? `@${username}?${query}` : `?${query}`;
  };

  useEffect(() => {
    if (likePK) {
      setIsLikePK(true);
    } else {
      setIsLikePK(false);
    }
    dispatch(list({ category, page, likePK }));
  }, [dispatch, category, page, likePK]);

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
            <PlaceList
              name={isLikePK ? 'LikeMOU' : 'mou'}
              locations={mous}
              images={images}
            />
            <Pagination page={page} lastPage={lastPage} buildLink={buildLink} />
          </>
        )
      )}
    </>
  );
};

export default MOUIndexContainer;
