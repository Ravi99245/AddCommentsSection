import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment, onDelete, toggleIsLiked} = props
  const {id, name, comment, isLiked, date, color} = eachComment
  const second = formatDistanceToNow(date)
  console.log(color)
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const applycolor = isLiked ? 'applyColor' : ''

  const onChangeColor = () => {
    onDelete(id)
  }

  const toggleIsLike = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="list-comment">
      <div className="profile">
        <p className={`design ${color}`}>{name[0].toUpperCase()}</p>
        <div>
          <h1 className="name">
            {name} <span className="time"> {second}</span>
          </h1>
          <p className="fullComment">{comment}</p>
        </div>
      </div>
      <div className="likeAndDelete">
        <div className="like-button">
          <button className="button1" type="button" onClick={toggleIsLike}>
            <img src={imageUrl} className="like" alt="like" />
          </button>
          <p className={`liked ${applycolor}`}>Like</p>
        </div>
        <button
          className="button1"
          type="button"
          onClick={onChangeColor}
          data-testid="delete"
        >
          <img
            className="like"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
