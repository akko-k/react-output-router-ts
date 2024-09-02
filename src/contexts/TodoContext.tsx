import { FC } from 'react';
import { createContext, ReactNode } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoType } from '../interfaces/Todo';



interface ContextInterface {
    todoList: Array<TodoType>;
    addTodo: (inputTitle: string, inputContent: string) => void;
    updateTodo: (id: number, newTitle: string, newContent: string) => void;
    deleteTodo: (id: number, title: string) => void;
  }

interface Props {
    children: ReactNode;
}

const defaultContextValue: ContextInterface = {
    todoList: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
  };

export const TodoContext = createContext(defaultContextValue);

/**
 * TodoProvider component.
 *
 * @component
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  const { todoList, addTodo, updateTodo, deleteTodo } =
    useTodo();

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
