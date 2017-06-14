"use strict";

var React = require('react');

var AuthorList = React.createClass({
	propTypes: { //declare expectations for a given component
		authors: React.PropTypes.array.isRequired //make sure its passed in
	},

	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td><a href={"/#authors/" + author.id}>{author.id}</a></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
};

return (
	<div>
		<table className="table">
			<thead>
				<th></th>
				<th>ID</th>
				<th>Name</th>
			</thead>
			<tbody>
				{this.props.authors.map(createAuthorRow, this)}
			</tbody>
		</table>
	</div>
		);
}
});

module.exports = AuthorList;