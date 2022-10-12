import { useSelector } from 'react-redux';
import qs from 'qs';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/common/Pagination';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const { username } = useParams();
  const page = parseInt(searchParams.get('page'), 10) || 1;

  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST/POSTS'],
  }));

  const buildLink = ({ username, page }) => {
    const query = qs.stringify({ page });
    return username ? `/posts/@${username}?${query}` : `/posts/?${query}`;
  };

  if (!posts || loading) return null;

  return (
    <Pagination
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
      buildLink={buildLink}
    />
  );
};

export default PaginationContainer;
