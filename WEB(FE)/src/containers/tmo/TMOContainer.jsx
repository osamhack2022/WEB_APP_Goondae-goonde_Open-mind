import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import LoadingPlace from '../../components/loading/LoadingPlace';
import Place from '../../components/place/Place';
import { product, reviews as fake } from '../../lib/fakeData/product';
import { initializeImage, readImage, readTMO } from '../../modules/tmo';

const TMOContainer = () => {
  const { placeId } = useParams();
  const dispatch = useDispatch();
  const { tmo, error, image, user, loading } = useSelector(
    ({ tmo, loading, user }) => ({
      tmo: tmo.tmo,
      image: tmo.image,
      error: tmo.error,
      user: user.user,

      loading: loading['tmo/READ_TMO'],
    })
  );

  useEffect(() => {
    dispatch(readTMO(placeId));
  }, [dispatch, placeId]);

  useEffect(() => {
    if (!tmo) return;
    dispatch(readImage(tmo.name));
    return () => dispatch(initializeImage('image'));
  }, [tmo]);

  return (
    <>
      {!loading && tmo && image ? (
        <>
          <Place product={product} location={tmo} image={image} fake={fake} />
        </>
      ) : (
        <>
          <LoadingPlace />
        </>
      )}
    </>
  );
};

export default TMOContainer;
