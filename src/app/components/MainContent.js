import React from "react";

export const MainContent = (props) => {
	console.log(props.users);
	console.log(props.addUser);
	return (
		<div className="container">
			<div className="panel">
				<h1>Hey Wassssup !!!!</h1>
				<div className="panel">{props.result}</div>
				{/* <button className="btn btn-primary" onClick={this.onCounterClick.bind(this)}>Click Counter !!</button> */}
				<button className="btn btn-primary" onClick={props.countUp}>Add Three !!</button>
				<button className="btn btn-primary" onClick={() => props.addUser("custom User")}>Add User !!</button>
			</div>

			<h2>{props.tableTitle}</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>

					{props.users.map((user, i) =>
						<tr key={i}>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.email}</td>
						</tr>
					)}


				</tbody>
			</table>
		</div>
	);

}