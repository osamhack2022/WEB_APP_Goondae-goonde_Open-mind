import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/write/Editor';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
=======
  const { title, content } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
>>>>>>> hotfix/conflict
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

<<<<<<< HEAD
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
=======
  return (
    <Editor onChangeField={onChangeField} title={title} content={content} />
  );
>>>>>>> hotfix/conflict
};

export default EditorContainer;
