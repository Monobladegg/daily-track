import React, { FC } from 'react';
import s from './index.module.scss';

interface Props {
  year: string;
  month: string;
  day: string;
}

const Routine: FC<Props> = ({ year, month, day }) => {

  return (
    <div className={s.routine}>
      <h3>Выберите время выполнения рутины:</h3>
      <div>
        <h4>Выбранное время:</h4>
      </div>
    </div>
  );
};

export default Routine;
