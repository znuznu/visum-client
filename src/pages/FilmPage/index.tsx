import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Film from '../../components/Film';

const FilmPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  if (!Number.isInteger(movieId)) {
    navigate('/');
  }

  return <Film movieId={parseInt(movieId!)} />;
};

export default FilmPage;
