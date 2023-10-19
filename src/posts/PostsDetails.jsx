import React from 'react';
import { useGetPostByIdQuery } from '../api/posts';
import { useDispatch } from 'react-redux';
import { setSelectedPost } from './PostsSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data=[] } = useGetPostByIdQuery(id);

  return (
    <>
      <h1>Полная информация о посте</h1>
      {data && (
        <>
          <p>Номер: {data.id}</p>
          <p>Заголовок: {data.title}</p>
          <p>Описание: {data.body}</p>
          <Link to="/">
            <button onClick={() => dispatch(setSelectedPost(null))}>Назад</button>
          </Link>
        </>
      )}
    </>
  );
};

export default PostDetails;