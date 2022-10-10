import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';

const WritePage = () => {
  return (
    <>
      <Helmet>
        <title>글 작성하기 - REACTERS</title>
      </Helmet>
      <HeaderContainer />
      <div className='pt-[4rem] h-full'>
        <Responsive>
          <EditorContainer />
          <WriteActionButtonsContainer />
        </Responsive>
      </div>
      <FooterContainer />
    </>
  );
};

export default WritePage;
