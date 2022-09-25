const IntroTwo = ({ img, title, des }) => {
  return (
    <div className='hero min-h-screen bg-base-100'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={img} className='max-w-sm rounded-lg shadow-2xl' alt='img' />
        <div>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='py-6 max-w-2xl'>{des}</p>
          <button className='btn btn-primary'>지금 확인하기</button>
        </div>
      </div>
    </div>
  );
};

export default IntroTwo;
