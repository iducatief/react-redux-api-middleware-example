import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import TimeAgo from 'react-timeago'
import { connect, dispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

import { deletePost } from '../actions/PostsActions'


@connect(null, (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
})

export default class PostContainer extends Component {
  deletePost = () => {
    this.props.deletePost(this.props.post.id)
  }

  render() {
    const post = this.props.post

    return (
      <article className='post'>
        <h1>{post.title}</h1>
        <TimeAgo date={post.publishedAt * 1000} minPeriod={60} />
        <Button className="delete" onClick={ this.deletePost.bind(this) }>delete</Button>
        <ReactMarkdown source={post.text} />
      </article>
    );
  }
}
