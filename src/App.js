import { Wrapper, Title, WrapperTodo } from './App.style.js';
import Footer from './components/atoms/Footer/index.js';
import TodoListComponents from './components/organisms/TodoList/index.js';
import TodoListForm from './components/organisms/TodoListForm/index.js';

function App() {
  return (
    <Wrapper>
      <Title>TODO APP</Title>
      <WrapperTodo>
        {/** Form Todo List */}
        <TodoListForm />

        {/** Todo List */}
        <TodoListComponents />

        {/** Footer Todo */}
        <Footer />
      </WrapperTodo>
    </Wrapper>
  );
}

export default App;
