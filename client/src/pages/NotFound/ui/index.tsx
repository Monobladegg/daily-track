import React, { FC } from 'react'
import s from './index.module.scss'

const NotFoundPage: FC = () => {
  return (
    <h1 className={s.title}>Страница не знайдена 404</h1>
  )
}

export default NotFoundPage