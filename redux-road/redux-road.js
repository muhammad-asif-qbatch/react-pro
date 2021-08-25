const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
};

const reducer = (state = initialWagonState, action) => {
    switch (action.type) {
        case 'gather':
            return {
                ...state,
                supplies: state.supplies + 15,
                days: state.days + 1
            }
        case 'travel':
            return {
                ...state,
                supplies: (state.supplies - 20 * action.payload > -1) ? state.supplies - 20 * action.payload : state.supplies,
                distance: (state.supplies - 20 * action.payload > -1) ? state.distance + 10 * action.payload : state.distance,
                days: (state.supplies - 20 * action.payload > -1) ? state.days + action.payload : state.days
            }
        case 'tippedWagon':
            return {
                ...state,
                supplies: state.supplies - 30,
                days: state.days + 1
            }
        default:
            return state;
    }
}

let wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(wagon, { type: 'travel', payload: 1 });
console.log(wagon);
wagon = reducer(wagon, { type: 'gather' });
console.log(wagon);
wagon = reducer(wagon, { type: 'tippedWagon' });
console.log(wagon);

wagon = reducer(wagon, { type: 'travel', payload: 3 });
console.log(wagon);