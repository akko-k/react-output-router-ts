import { useState, useCallback } from 'react';
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../constants/data';

/**
 * use Todo
 */
export const useTodo = () => {
  //todoリスト
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);
  //採番ID
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  //Todoリストに新規Todoリストを追加
  const addTodo = useCallback(
    (inputTitle: string, inputContent: string) => {
      const nextUniqueId = uniqueId + 1;
      const newTodoList = [
        ...todoList,
        {
          id: nextUniqueId,
          title: inputTitle,
          content: inputContent,
        },
      ];
      setUniqueId(nextUniqueId);
      setTodoList(newTodoList);
    },
    [todoList, uniqueId],
  );

  //Todoリストを更新
  const updateTodo = useCallback(
    (id: number, newTitle: string, newContent: string) => {
      const updatedTodoList = todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle,
            content: newContent,
          };
        }
        return todo;
      });
      setTodoList(updatedTodoList);
    },
    [todoList],
  );

  //Todoリストを削除
  const deleteTodo = useCallback(
    (id: number, title: string) => {
      const confirmed = window.confirm(`「${title}」を削除しますか？`);
      if (confirmed) {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
      }
    },
    [todoList],
  );

  return {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
