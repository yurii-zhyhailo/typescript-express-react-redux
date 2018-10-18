import * as React from 'react';

class Header extends React.Component {
    render() {
      return (
          <div>
            <h1>Header</h1>
            <ul className="header">
              <li><a href="/hello">Home</a></li>
            </ul>
          </div>
      );
    }
}

export {Header}