// Write your code here

import './index.css'

const CommentItem = props => {
  const {arrayList, deleteCmt, toggleImg} = props
  const {id, firstName, username, comment, date, newClass, isFav} = arrayList

  const imgUrl = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const addClass = isFav ? 'sky-blue' : ''
  const deleteBtn = () => {
    deleteCmt(id)
  }

  const toggleBtn = () => {
    toggleImg(id)
  }

  return (
    <li className="container">
      <div className="first">
        <p className={`user-icon ${newClass}`}>{firstName}</p>
        <h1 className="name">{username}</h1>
        <p className="dates">{date}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="second">
        <div className="third">
          <button className="btn" type="button" onClick={toggleBtn}>
            <img src={imgUrl} className="img" alt="like" />
          </button>
          <p className={`icon ${addClass}`}>Like</p>
        </div>
        <button
          className="btn"
          type="button"
          onClick={deleteBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
