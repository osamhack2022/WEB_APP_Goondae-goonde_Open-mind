const IntroMain = ({ img, title }) => {
  return (
    <div
      className='hero min-h-full'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>{title}</h1>
          <p className='mb-2'>
            부대 근처 놀거리! 오늘 나가서 먹을게 뭐가 있을까?
          </p>
          <p className='mb-2'>이번에 축제 때 아이돌온다는데 누구오지?</p>
          <p className='mb-2'>부모님오신다는데 어디 모시고 가야하나....</p>
          <p className='mb-5'>
            100일만에 보는 내 여자친구 같이 어디가면 좋을까...
          </p>
          <button className='btn btn-primary'>여기서 알아보기</button>
        </div>
      </div>
    </div>
  );
};

export default IntroMain;
