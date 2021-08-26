const intialState = {
    data: {}
};
const changeNumber = (state=intialState,action) => {
 switch (action.type) {
     case "INCREMENT":
     {
        console.log("payload", action.payload);
        return action.payload;
     }  
    case "DECREMENT":
        return state-action.payload;
    default: return state;
    
 }
}
export default changeNumber;