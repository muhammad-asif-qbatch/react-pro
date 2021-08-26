export const incNumberAction = (nm) => (dispatch, getState) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        dispatch(incNumber(json));
    })
}
export const incNumber = (data) => {
    console.log("data in action creater", data);
    return {
        type: 'INCREMENT',
        payload: data,
    }
}
export const decNumber = (numb) => {
    return {
        type: 'DECREMENT',
        payload:numb,
    }
}