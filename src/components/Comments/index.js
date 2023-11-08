import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()

    const color =
      initialContainerBackgroundClassNames[
        Math.floor(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]

    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      color,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => id !== eachComment.id,
      ),
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const l = commentsList.length

    return (
      <div className="bg-container">
        <div className="input-container">
          <form className="comment-form-container" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p className="description">Say something about 4.0 technologies</p>
            <input
              className="input"
              value={name}
              onChange={this.onChangeName}
              placeholder="Your Name"
            />
            <textarea
              className="comment"
              rows="5"
              cols="15"
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            >
              0
            </textarea>
            <button className="button" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            className="comment-image"
            alt="comments"
          />
        </div>
        <hr className="separator" />
        <div className="comments-container">
          <p className="count">
            <span className="no-of-comments">{l}</span> Comments
          </p>
          <ul className="comments-section">
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                eachComment={eachItem}
                onDelete={this.onDeleteComment}
                toggleIsLiked={this.toggleIsLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
