import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import bankStore from '../store/bankStore';

function BankInsert({type,popState}) {

    const {save} = bankStore();

    function handleSubmit(e){
        e.preventDefault();
        const today = new Date();
        const formattedDate = new Intl.DateTimeFormat('ko-KR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            }).format(today)

        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];

        const monthEng = months[Number(formattedDate.split('.')[1]) - 1];


        const formData = new FormData(e.target);
        formData.append('date',formattedDate)
        formData.append('month',monthEng)
        formData.append('type',type)
        formData.append('id',Date.now())
        
        const resultValue = Object.fromEntries(formData.entries()); 
        e.target.reset();
        popState[1](false);
        save(resultValue)
    }
    
  return (
    <div className={`popup ${popState[0]?'active':''}`}
        onClick={(e)=>{
            e.target.classList.contains('insert') && popState[1](false)
        }}
    >
        <div>
        <Box
          onSubmit={(e)=>handleSubmit(e)}
          component="form"
          sx={{ '& > :not(style)': { m: 0, width: '100%' } }}
          noValidate
          autoComplete="off"
        >
          
          <TextField id="filled-basic" label="Amount" variant="filled" name="amount" />
          <TextField id="filled-basic" label="Message" variant="filled" name="message" multiline
          rows={4} />
          <button type="submit" className="bg-blue">{type}</button>
        </Box>
        </div>
      </div>
  )
}

export default BankInsert