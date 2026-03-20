import { create } from 'zustand'

const bankStore = create((set) => ({
  total:0,
  data: [],
  save:function(value){
    set((item)=>{
        let total;
        if(value.type==='입금'){total = item.total + Number(value.amount)}
        else{total = item.total - Number(value.amount)}

        return {data:[...item.data, value], total}
    });
  }
}))

export default bankStore;

