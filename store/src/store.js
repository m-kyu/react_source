import { create } from 'zustand'

const useStore = create((set) => ({
  data: 'hello zustand',
  update:function(){
    set({data:'값 변경'});
  }
}))

export default useStore;