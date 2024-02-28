import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = (state) => ({
    todos: state.tasks.tasks,
});

const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;
