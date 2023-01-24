import { classNames } from '@renderer/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'

export const PageError = () => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError)}>
      <p>Произошла непредвиденная ошибка</p>
      <button onClick={reloadPage}>Обновить страницу</button>
    </div>
  )
}
