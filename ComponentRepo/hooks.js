import { forwardRef, useRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getMessage() {
      alert("Message from Child");
    }
  }));

  return <h1>Child Component</h1>;
});

const Parent = () => {
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getMessage()}>Click</button>
    </div>
  );
};


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getMessage();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

class Child extends React.Component {
  getMessage() {
    alert("Message from Child");
  }

  render() {
    return <h1>Child Component</h1>;
  }
}

class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child ref={(instance) => { this.child = instance; }} />
        <button onClick={() => { this.child.getMessage(); }} >
          Click
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  getMessage() {
    alert("Message from Child");
  }

  render() {
    return <h2>Child Component</h2>;
  }
}


const api = 'your api'; 
const user = JSON.parse(sessionStorage.getItem('data'));
const token = user.data.id; /*take only token and save in token variable*/

axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
.then(res => {
  console.log(res.data);
.catch((error) => {
  console.log(error)
});


import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const IndexPage = () => {
  return <h2>Home Page</h2>;
};

const PropsPage = ({ title }) => {
  return <h2>{title}</h2>;
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link> |
        <Link to="/props-through-component">Props through component</Link> |
        <Link to="/props-through-render">Props through render</Link> |
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route
            exact
            path="/props-through-component"
            component={() => <PropsPage title={`Props through component`} />}
          />
          <Route
            exact
            path="/props-through-render"
            render={(props) => (
              <PropsPage {...props} title={`Props through render`} />
            )}
          />
        </Switch>
      </Router>
    </section>
  );
}


import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const IndexPage = () => {
  return <h2>Home Page</h2>;
};

const PropsPage = ({ title }) => {
  return <h2>{title}</h2>;
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link> |
        <Link to="/props-through-component">Props through component</Link> |
        <Link to="/props-through-render">Props through render</Link> |
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route
            exact
            path="/props-through-component"
            component={() => <PropsPage title={`Props through component`} />}
          />
          <Route
            exact
            path="/props-through-render"
            render={(props) => (
              <PropsPage {...props} title={`Props through render`} />
            )}
          />
        </Switch>
      </Router>
    </section>
  );
}


import React, { useState, useRef } from "react";

export default function App() {

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(goingUp, currentScrollY);
  };

  return (
    <div onScroll={onScroll} style={{ height: 300, overflowY: "scroll" }}>
      {Array(50)
        .fill("Get the scroll position on scroll in react.")
        .map((f, i) => {
          return <p key={i}>{f}</p>;
        })}
    </div>
  );
}


const posts = [
  { id: 10, title: "Link One" },
  { id: 20, title: "Link Two" },
  { id: 30, title: "Link Three" }
];

export default function App() {
  return (
    <ul>
      {posts.map(function (post) {
        return (
          <li key={post.id}>
            <a href={"/posts/" + post.id}>{post.title}</a>
          </li>
        );
      })}
    </ul>
  );
}