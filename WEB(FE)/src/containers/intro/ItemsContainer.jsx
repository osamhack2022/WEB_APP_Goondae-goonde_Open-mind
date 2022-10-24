import IntroMain from '../../components/intro/IntroMain';
import IntroOne from '../../components/intro/IntroOne';
import IntroTwo from '../../components/intro/IntroTwo';
import osam1 from '../../lib/img/osam1.jpg';
import osam2 from '../../lib/img/osam2.jpg';
import osam3 from '../../lib/img/osam3.jpg';
import osam4 from '../../lib/img/osam4.png';

const ItemsContainer = () => {
  return (
    <>
      <IntroMain img={osam4} title='오늘 나가서 뭐할까?' />
      <IntroOne
        img={osam1}
        title='TMO 정보보기'
        des='여행 장병 안내소(TMO)를 통해 왕복 승차권 혜택을 누리세요'
      />
      <IntroTwo
        img={osam2}
        title='MOU 장병 혜택 확인하기'
        des='군복무를 하면서 누릴수 있는 혜택, 놀이동산 숙박시설 등 많은 혜택들을 한번에 찾아보세요'
      />
      <IntroOne
        img={osam3}
        title='부대 근처 맛집 찾기'
        des='지역 유지들만 알고 있다는 시골 맛집! 평일 외출 때 나가서 먹을 수
            있는 맛집! 여기저기 돌아다니면서 확인하거나, 적어두고 공유할 필요
            없어요 지금 확인하세요'
      />
      <IntroTwo
        img={osam4}
        title='부대 근처 축제 확인하기'
        des='이번에 지역 축제가 있다는데... 부대에는 판플렛도 안오고, 나가서
            직접확인할 수도 없고 내가 좋아하는 아이돌이 오는 건가? 확인하고 싶으셨죠?'
      />
    </>
  );
};
export default ItemsContainer;
