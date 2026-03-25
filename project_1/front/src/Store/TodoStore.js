//Store > todoStore.js
import { create } from 'zustand'
import axios from 'axios'

const todoStore = create((set) => ({
    save: async function(value){
        try{
            let res = await axios.post("http://localhost:4000/todo",value)
            if(!res.data.success){
                throw new Error(res.data.msg);
            }
        }
        catch(err){
            console.log(`에러발생 : ${err}`)
        }
    },
    update: async function(){},
    delete: async function(){},
}))

export default todoStore;