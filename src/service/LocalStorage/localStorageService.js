export const loadStorage = (attribute) => {
  try {
    if(typeof attribute === 'string'){
      const serializeStorage = localStorage.getItem(attribute);
      if(serializeStorage === null){
        return undefined;
      }
      return JSON.parse(serializeStorage);
    }
  } catch(err){
    return undefined
  }
};

export const saveStorage = (attribute) => (state) => {
  try {
    if(typeof attribute === 'string'){
      const serializeStorage = JSON.stringify(state);
      return localStorage.setItem(attribute , serializeStorage)
    }
  }catch(err){

  }
}
