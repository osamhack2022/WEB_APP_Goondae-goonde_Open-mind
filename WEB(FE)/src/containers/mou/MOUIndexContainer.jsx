import { useSearchParams } from 'react-router-dom';

const MOUIndexContainer = () => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const category = searchParams.get('category');
  return <h1>MOU</h1>;
};

export default MOUIndexContainer;
