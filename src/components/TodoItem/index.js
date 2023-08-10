// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDelete} = props
  const {title, id} = todoItem

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="item">
      <p className="todoItem">{title}</p>
      <button onClick={onDeleteItem} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
