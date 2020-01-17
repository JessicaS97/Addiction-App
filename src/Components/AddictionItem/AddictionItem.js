import React from 'react'
import {Link} from 'react-router-dom';

import './AddictionItem.css'

class AddictionItem extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        posts: []
    }
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

export default AddictionItem