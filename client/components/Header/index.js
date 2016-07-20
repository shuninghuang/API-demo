
import { PropTypes } from 'react'
import TodoTextInput from '../TodoTextInput'

const Header = ({addTodo}) => {
  const handleSave = (text) => {
    if (text.length) {
      addTodo(text)
    }
  }

  return (
    <header>
      <h1>Todos</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder='What needs to be done?' />
    </header>
  )
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
