const initialState = {
    tasks: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('Reducer: Adding task:', action.payload);
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export default todoReducer;
