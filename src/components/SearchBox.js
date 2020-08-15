import React from 'react';

const SearchBox = ({ searchTerm, setSearchTerm }) => {

  return (
		<div className="row input-group mb-3">
			<input
				className="form-control"
				value={searchTerm}
				type="text"
				placeholder="Search"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className="input-group-append">
				<button
					className="input-group-text"
					onClick={() => setSearchTerm("")}
				>
					Clear
				</button>
			</div>
		</div>
	);
}

export default SearchBox
