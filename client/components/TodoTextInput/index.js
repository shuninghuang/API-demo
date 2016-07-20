
import { PropTypes } from 'react'
import { compose, withState, withHandlers } from 'recompose'
import classnames from 'classnames'
import style from './style.css'

const TodoTextInput = (props) => {
  const classes = classnames({
    [style.edit]: props.editing,
    [style.new]: props.newTodo
  }, style.normal)

  return (
    <input className={classes}
      type='text'
      autoFocus='true'
      placeholder={props.placeholder}
      value={props.text}
      onBlur={props.handleBlur}
      onChange={props.handleChange}
      onKeyDown={props.handleSubmit} />
  )
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool

  // text:
  // setText:
  // handleSubmit:
  // handleChange:
  // handleBlur:
}

export default compose(
  withState('text', 'setText', ''),
  withHandlers({
    handleSubmit: props => e => {
      const text = e.target.value.trim()
      if (e.which === 13) {
        props.onSave(text)
        if (props.newTodo) {
          props.setText('')
        }
      }
    },
    handleChange: props => e => {
      props.setText(e.target.value)
    },
    handleBlur: props => e => {
      const text = e.target.value.trim()
      if (!props.newTodo) {
        props.onSave(text)
      }
    }
  })
)(TodoTextInput)
