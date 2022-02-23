import React from 'react'
import './PostComment.css'

export const PostComment = (props) => {
  return (
    <div className="ui comments">
    <div className="comment">
      <div className="content">
        <b className="author">{props.comment.email}</b>
        <div className="text">
          {props.comment.body}
        </div>
      </div>
    </div>
</div>  
  )
}
