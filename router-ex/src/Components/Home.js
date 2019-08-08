import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	state = {
		posts: []
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				this.setState({
					posts: res.data.slice(0, 10)
				})
			});
	}
	render() {
		const { posts } = this.state;
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div key={ post.id } className="post card">
						<div className="card-content">
							<Link to={ '/' + post.id } >
								<span className="card-title red-text">{ post.title }</span>
							</Link>
							<p>{ post.body }</p>
						</div>
					</div>
				)
			})
		) : (
			<div className="center">No posts!</div>
		)
		return (
			<div className="container">
				<h4 className="center">Home</h4>
				{ postList }
			</div>
		)
	}
}
