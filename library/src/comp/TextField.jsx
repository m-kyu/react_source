import TextField from '@mui/material/TextField';
import { useState } from 'react';

function TextFieldBox({label, save}) {
  
  let [text, setText] = useState('');
  
  return (
    <TextField id="outlined-basic" 
    label={label} 
    variant="standard"
    value={text}
    onChange={(e)=>{
        setText(e.target.value);   
        save(label, e.target.value);
    }}
    //multiline 
    //error={false}
    //helperText="형식에 맞춰 입력하세요!"
    //disabled={false}
    //type="search"
    
    />
  )
}
// outlined, filled, standard
export default TextFieldBox




