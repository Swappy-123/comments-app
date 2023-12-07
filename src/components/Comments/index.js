import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import {v4 as uuidv4} from 'uuid'
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

// Write your code here

class Comments extends Component {
  state = {count: 0, arrayList: [], username: '', comment: ''}

  inputText = event => {
    this.setState({username: event.target.value})
  }

  textArea = event => {
    this.setState({comment: event.target.value})
  }

  deleteCmt = id => {
    const {arrayList} = this.state
    const fiterList = arrayList.filter(each => each.id !== id)
    this.setState(prevState => ({
      arrayList: fiterList,
      count: prevState.count - 1,
    }))
  }

  toggleImg = id => {
    this.setState(prevState => ({
      arrayList: prevState.arrayList.map(every => {
        if (every.id === id) {
          return {...every, isFav: !prevState.isFav}
        }
        return every
      }),
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const firstName = username.slice(0, 1)
    const dates = formatDistanceToNow(new Date())
    const index =
      initialContainerBackgroundClassNames[Math.ceil(Math.random() * 7)]
    const object = {
      id: uuidv4(),
      username,
      comment,
      firstName,
      date: dates,
      newClass: index,
      isFav: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, object],
      username: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count, arrayList, username, comment} = this.state
    return (
      <div className="bg-container">
        <div className="first">
          <div className="second">
            <h1 className="head">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="first" onSubmit={this.addComment}>
              <input
                type="text"
                className="inp"
                placeholder="Your Name"
                onChange={this.inputText}
                value={username}
              />
              <textarea
                className="inp"
                placeholder="Your Comment"
                onChange={this.textArea}
                value={comment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="hori" />
        <button type="button" className="button">
          {count}
        </button>
        <ul className="third">
        {arrayList.map(obj => (
          < CommentItem 
          key = {obj.id} arrayList = {obj} deleteCmt = {this.deleteCmt} toggleImg = {this.toggleImg} />
        ) )
          
          }
        </ul>
      </div>
    )
  }
}

export default Comments