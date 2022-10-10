import styled from 'styled-components';
import Button from './Button';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div``;

const Pagination = ({ page, lastPage, username, buildLink }) => {
  return (
    <PaginationBlock>
      <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ username, page: page - 1 })}
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ username, page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
