
import { PropTypes } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer = ({activeCount, selectedFilter, onShow, completedCount,
  onClearCompleted }) => {
  const renderTodoCount = () => {
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  const renderFilterLink = (filter) => {
    const title = FILTER_TITLES[filter]
    return (
      <a className={classnames({ [style.selected]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  const renderClearButton = () => {
    return completedCount > 0 ? (
      <button className={style.clearCompleted} onClick={onClearCompleted} >
        Clear completed
      </button>
    ) : (<noscript />)
  }

  return (
    <footer className={style.normal}>
      {renderTodoCount()}
      <ul className={style.filters}>
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
          <li key={filter}>
            {renderFilterLink(filter)}
          </li>
        )}
      </ul>
      {renderClearButton()}
    </footer>
  )
}

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  onShow: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Footer
