import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { BaseLayout } from '../../organisms/BaseLayout';
import styles from './styles.module.css';

export const TodoDetailTemplate: FC = () => {
  const { id } = useParams();
  const { todoList } = useContext(TodoContext);

  const todo = todoList.find((todo) => todo.id === Number(id));

  if (!todo) {
    return (
      <div className={styles.container}>
        <div>Todoが見つかりませんでした</div>
      </div>
    );
  }
  return (
    <BaseLayout title="Todo Detail">
      <div className={styles.container}>
        <section className={styles.common}>
          <InputForm value={todo.title} disabled placeholder={'タイトル'} />
        </section>
        <section className={styles.common}>
          <TextArea value={todo.content} disabled placeholder={'内容'} />
        </section>
      </div>
    </BaseLayout>
  );
};
