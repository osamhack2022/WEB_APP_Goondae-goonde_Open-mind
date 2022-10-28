import search from './search';

export const searchImages = async (locationTitles) => {
  const results = { data: [] };
  const data = await Promise.all(
    locationTitles.map(async (locationTitle) => {
      const response = await search.get(`image?query=${locationTitle}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
        },
      });

      return response.data.documents.slice(0, 3);
    })
  );

  results.data = data;

  return results;
};

export const readImage = async (title) => {
  const result = { data: [] };
  const response = await search.get(`image?query=${title}`, {
    headers: {
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
    },
  });
  result.data = response.data.documents.slice(0, 3);
  return result;
};
