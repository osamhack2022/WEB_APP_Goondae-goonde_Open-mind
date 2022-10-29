import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const PageNumber = styled.div``;

const Pagination = ({ page, lastPage, username, buildLink }) => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category');
  const like = searchParams.get('like');
  return (
    <div className='w-[320px] mx-auto flex justify-between pb-[3rem] '>
      <Button
        disabled={page === 1}
        to={
          page === 1 ? undefined : buildLink({ username, page: page - 1, like })
        }
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ username, page: page + 1, category, like })
        }
      >
        다음
      </Button>
    </div>
  );
};

export default Pagination;
