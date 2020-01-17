import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPosts} from '../../actions/postActions'

import './AddictionItem.css'

class AddictionItem extends React.Component {

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
                <h2>{post.addiction}</h2>
                <h3>{post.startDate}</h3>
                <h3>{post.motive}</h3>
            </div>
        ))
        return(
            <div className="addiction-item-list">
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