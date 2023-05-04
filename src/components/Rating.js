import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Rating = ({rating, onClick, style}) => {
  return (
    <>
        {
            [...Array(5)].map((_,i) => (
                <span key={i} onClick={()=> onClick(i)} style={style}>
                    {rating > i ? (<StarIcon />): (<StarBorderIcon/>)}
                </span>
            ))
        }
    </>
  )
}

export default Rating