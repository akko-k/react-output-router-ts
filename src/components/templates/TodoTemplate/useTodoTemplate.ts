import { useState, useMemo } from 'react';
import { TodoType } from '../../../interfaces/Todo';
import { EventType } from '../../../interfaces/Event';

type Param = {
  todoList: Array<TodoType>;
};

type StatesType = {
  searchKeyword: string;
  filteredTodoList: Array<TodoType>;
};

type ActionType = {
  handleChangeSearchKeyword: EventType['onChangeInput'];
};

/**
 * use Todo
 */
export const useTodoTemplate = ({ todoList }: Param) => {
  //検索ワード
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  // 検索ワードを更新
  const handleChangeSearchKeyword: EventType['onChangeInput'] = (e) =>
    setSearchKeyword(e.target.value);

  //検索ワードに一致するTodoリストを取得
  const filteredTodoList = useMemo(() => {
    return todoList.filter((todo) =>
      todo.title.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  }, [todoList, searchKeyword]);

  const states: StatesType = {
    searchKeyword,
    filteredTodoList,
  };

  const actions: ActionType = {
    handleChangeSearchKeyword,
  };

  return [states, actions] as const;
};
