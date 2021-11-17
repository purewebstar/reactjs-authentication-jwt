// setting localStorage data's
export const setLocalStorage = (key, value) =>{
  window.localStorage.setItem(key, JSON.stringify(value));
}
// getting localStorage data's
export const getLocalStorage = (key) =>{
    const value = window.localStorage.getItem(key);
    
    if(value){
      return JSON.parse(value)
    }
}
// remove localstorage data's
export const removeLocalStorage = (key)=>{
  window.localStorage.removeItem(key);
}

// clear localstorage data's
export const clearLocalStorage = ()=>{
  window.localStorage.clear();
}