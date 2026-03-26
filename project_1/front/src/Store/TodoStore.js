//Store > todoStore.js
import { create } from 'zustand'
import axios from 'axios'


const todoStore = create((set) => ({
    data:[],
    save: async function(value){
        try{
            let res = await axios.post("http://localhost:4000/todo",value)
            set(function(item){
                return {data:[...item.data, res.data.data]}
            });

            if(!res.data.success){
                throw new Error(res.data.msg);
            }
        }
        catch(err){
            console.log(`에러발생 : ${err}`)
        }
    },
    get: async function(){
        const res = await axios.get('http://localhost:4000/todo');
        set({data:res.data});
    },


    update: async function(){},
    del: async function(id){
        try{
            const res = await axios.delete(`http://localhost:4000/todo?id=${id}`);
            if(!res.data.success) throw new Error('에러발생');
            set(function(item){
                return {data:item.data.filter(obj=>obj._id !== id)}
            });
        }
        catch(err){

        }
       
        
    },
    completeTodo: async function(id){
        const res = await axios.put(
            `http://localhost:4000/todo/state?id=${id}`,
            {isdone:true}
        );
        set(function(item){
            let updateData = item.data.map(function(obj){
                                if(obj._id == id){
                                    obj.isdone = true;
                                }
                                return obj;
                            });

            return {data:updateData}
        });
    },

}))

export default todoStore;