"use client";

import { Header } from '@/widgets';
import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { Routine } from "@/widgets";

interface Props {
  params: {
    year: string;
    month: string;
    day: string;
  };
}

const EditDay = ({ params }: Props) => {
  const [isSelected, setIsSelected] = useState<number>(1);
  const [countRoutines, setCountRoutines] = useState<number>(1);
  const [countTargets, setCountTargets] = useState<number>(1);
  const [day, setDay] = useState<string>(params.day);
  const [month, setMonth] = useState<string>(params.month);
  const [year, setYear] = useState<string>(params.year);
  useEffect(() => {
    if (params.day.length === 1) setDay(`0${params.day}`);
    if (params.month.length === 1) setMonth(`0${params.month}`);
  }, [isSelected]);

  const addCount = () => {
    if (isSelected === 1) {
      setCountRoutines(countRoutines + 1);
    } else if (isSelected === 2) {
      setCountTargets(countTargets + 1);
    }
  };

  return (
    <>
      <Header />
      <div className={s.container}>
        <h1>Изменить план на {day}.{month}.{year}</h1>
        <div className={s.selections}>
          <button onClick={addCount}>Добавить {isSelected === 1 ? 'рутину' : 'цель'}</button>
          <button onClick={() => setIsSelected(1)} className={`${s.select} ${isSelected === 1 && s.selected}`}>Расписание дня</button>
          <button onClick={() => setIsSelected(2)} className={`${s.select} ${isSelected === 2 && s.selected}`}>Цели на день</button>
        </div>
        <div className={s.content}>
          {isSelected === 1 && new Array(countRoutines).fill(null).map((_, index) => (
            <Routine year={year} month={month} day={day} key={index} />
          ))}
          {/* {isSelected === 2 && new Array(countTargets).fill(null).map((_, index) => (
            <Target key={index} />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default EditDay;
