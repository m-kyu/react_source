//HalfRating.jsx
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function HalfRating() {

  let [num, setNum] = useState(2.5);

  return (
    <Stack spacing={3}>
      <Rating 
      name="half-rating"  
      precision={0.5}  
      value={num} 
      onChange={(e,v)=>setNum(v)}
      size="small"
      sx={{fontSize:60,color:'blue'}}
      //small, middle, large
      />


      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  )
}

export default HalfRating
