<<<<<<< HEAD
import { useSelector } from '../../../node_modules/react-redux/es/exports';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/posts/Pagination';
=======
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/common/Pagination';
>>>>>>> hotfix/conflict

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const { username } = useParams();
<<<<<<< HEAD
  const tag = searchParams.get('tag');
=======
>>>>>>> hotfix/conflict
  const page = parseInt(searchParams.get('page'), 10) || 1;

  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST/POSTS'],
  }));

<<<<<<< HEAD
=======
  const buildLink = ({ username, page }) => {
    const query = qs.stringify({ page });
    return username ? `/@${username}?${query}` : `/?${query}`;
  };

>>>>>>> hotfix/conflict
  if (!posts || loading) return null;

  return (
    <Pagination
<<<<<<< HEAD
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
=======
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
      buildLink={buildLink}
>>>>>>> hotfix/conflict
    />
  );
};

export default PaginationContainer;
