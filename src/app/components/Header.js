import React from "react";

export class Header extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">{this.props.webSiteName}</a>
			    </div>
			    <ul className="nav navbar-nav">
			    	{this.props.menuItems.map((menuItem,i) => <li key={i}><a href="#">{menuItem}</a></li> )}
			      <li className="active"><a href="#">ActiveMenuItem</a></li>
			    </ul>
			  </div>
			</nav>
        );
    }
}