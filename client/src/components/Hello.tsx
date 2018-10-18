import *  as React from 'react';

interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from me {this.props.compiler} and to {this.props.framework} to !</h1>;
    }
}

export { HelloProps, Hello };

// https://medium.freecodecamp.org/effective-use-of-typescript-with-react-3a1389b6072a
// http://withjavascript.com/blog/tdd-a-restful-api-with-node-express-typescript-and-jest-part-1
// https://alligator.io/react/react-router-ssr/