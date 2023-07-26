import React from 'react';
import { styled, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const StyledBanner = styled('img')({
    padding: 20,
    width: '100%'
  });

  const Title = styled(Typography)`
    color: #ffffff;
  `

const Slide = ({movies}) => {
  return (
    <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
        >
            {
                movies.map(movie => (
                  <>
                    <StyledBanner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                    <Title>{movie.original_title}</Title>
                  </>
                ))
            }
        </Carousel>
  )
}

export default Slide;