import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchPosts} from '../../actions/postActions'

import './AddictionItem.css'

class AddictionItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.props.fetchPosts()
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return(
            <div className="addiction-item">
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(AddictionItem)