"use client";

import { Header } from '@/widgets'
import React, { useState } from 'react'
import s from './index.module.scss'

interface Props {
  params: {
    year: string
    month: string
    day: string
  }
}

const EditDay = ({ params }: Props) => {

  const [isSelected, setIsSelected] = useState<number>(1)
  const [countRoutines, setCountRoutines] = useState<number>(1)
  const [countTargets, setCountTargets] = useState<number>(1)

  return (
    <>
      <Header />
      <div className={s.container}>
        <h1>Изменить план на {params.day}.{params.month}.{params.year}</h1>
        <div className={s.selections}>
          <button>Добавить {isSelected === 1 && 'рутину'} {isSelected === 2 && 'цель'}</button>
          <button onClick={() => setIsSelected(1)} className={`${s.select} ${isSelected === 1 && s.selected}`}>Расписание дня</button>
          <button onClick={() => setIsSelected(2)} className={`${s.select} ${isSelected === 2 && s.selected}`}>Цели на день</button>
          <button>Сохранить день</button>
        </div>
        <div className={s.content}>
          {isSelected === 1 }
          {isSelected === 2 }
        </div>
      </div>
    </>
  )
}

export default EditDay
