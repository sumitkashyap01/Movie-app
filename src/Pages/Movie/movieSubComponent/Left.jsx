import React from 'react'
import Poster from './Poster'
import Title from './Title'

const Left = ({ movieDetails, credits }) => {
  return (
    <>
      <Poster movieDetails={movieDetails} credits={credits} />
      <Title movieDetails={movieDetails} credits={credits} />
    </>
  );
};

export default Left
