import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPosts} from '../../actions/postActions'

import './AddictionItem.css'
import { isMappedTypeNode } from 'typescript';

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id} className="addiction-item">
                <h3>{post.addiction}</h3>
                <h2>Start Date: {post.startDate}</h2>
                <h2>$ {post.savingCost}</h2>
                <h2>{post.savingTime}/h</h2>
                <h2>Motive: {post.motive}</h2>
                
            </div>
        ))
        return(
            <div className="addictions">
                <h1>Addictions</h1>
                {postItems}
            </div>
        )
    }
}

AddictionItem.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(AddictionItem)