//jestcase test

// App.js

function App() {
  let [count, setCount] = useState(0);

  const decrement = () => setCount((count -= 1));
  const increment = () => setCount((count += 1));

  return (
    <div className="App">
      <h1>Testing React Hooks</h1>
      <p>{count}</p>
      <button onClick={decrement}>-</button>

      <button onClick={increment}>+</button>
    </div>
  );
}


//understanding the state

unction App() {

  const [value, setValue] = React.useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(
      () => console.log(`Search function called: "${value}"`),
      300
    );
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <>
      <input onChange={handleOnChange} value={value} placeholder="Search" />
      <h1>{value}</h1>
    </>
  );
}




//boolean state udpate

function App() {
  const [state, setState] = useState(true);

  function toggle() {
    setState(!state);
  }

  return (
    <div className="App">
      <h2 onClick={toggle}>
        <p>Do you feel good today?</p>
        <div className="toggle">
          {state ? (
            <span role="img" aria-label="Thums Up">
              Yes! 👍
            </span>
          ) : (
            <span role="img" aria-label="Thums Down">
              No! 👎
            </span>
          )}
        </div>
      </h2>
    </div>
  );
}



//onScroll update 

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

//how to show a toggle function in React

export default function App() {

  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        Toggle: {show ? "Show" : "Hide"}
      </button>
      {show && <h2>Hello World!</h2>}
    </div>
  );
}



const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (type) => {
    type === "increment" ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div className="buttons">
        <button onClick={() => handleClick("increment")}>Increment</button>
        <button onClick={() => handleClick("decrement")}>Decrement</button>
      </div>
    </div>
  );
};





//creating a menu


Input:
[
  {
    label: "Menu 1",
  },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      { label: "Sub Menu 1" },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      { label: "Sub Menu 4" },
    ],
  },
  {
    label: "Menu 4",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
];



import React from "react";
import ReactDOM from "react-dom";
import App from "../index";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App loads with initial state of 0", () => {
  const wrapper = shallow(<App />);
  const text = wrapper.find("p").text();
  expect(text).toEqual("0");
});







import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const AboutPage = () => {
  return <h3>About Page</h3>;
};

const NoMatchPage = () => {
  return <h3>Page Not Found</h3>;
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/"> Home | </Link>
        <Link to="/about"> About | </Link>
        <Link to="/page-not-found"> 404 </Link>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </section>
  );
};





function App() {

  const [value, setValue] = React.useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(
      () => console.log(`Search function called: "${value}"`),
      300
    );
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <>
      <input onChange={handleOnChange} value={value} placeholder="Search" />
      <h1>{value}</h1>
    </>
  );





const [book, setBooks] = useSate([
  {id: 1, title: 'sense and sensibility'},
  {id: 2, title: 'olier twist'},
  
])

const changeTitleById = (id, title) =>{
  const updatedBooks = books.map(book => {
    if(book.id === id) {
      return {...book, title: newTitle}
    }

    return book;
  })
  setBooks(updatedBooks)
}




const [fruit, setFruit] = useState({
  color: 'red',
  name: 'apple',
});

const removeColor = () => {
  // `rest` is an object with all the properties
  // of fruit except for `color`.
  const { color, ...rest } = fruit;

  setFruit(rest);
};


const [colors, setColors] = useState(['red', 'green', 'blue']);

const removeColorAtIndex = (indexToRemove) => {
  const updatedColors = colors.filter((color, index) => {
    return index !== indexToRemove;
  });

  setColors(updatedColors);
};








Class App extends Component {
  state = {
    file: null
  };

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file });
  }
  async handleUpload(e) {
    console.log(this.state.file);
    await uploadImage(this.state.file);
  }

  render() {
    return (
      <div className="App">
        <h1> File Upload in React </h1>
        <input type="file" name="file" onChange={(e) => this.handleFile(e)} />
        <button onClick={(e) => this.handleUpload(e)}>Upload</button>
      </div>
    );
  }
}

const uploadImage = async (file) => {
  try {
    console.log("Upload Image", file);
    const formData = new FormData();
    formData.append("filename", file);
    formData.append("destination", "images");
    formData.append("create_thumbnail", true);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    const url = "FILE_DIRECTORY";

    const result = await axios.post(url, formData, config);
    console.log("REsult: ", result);
  } catch (error) {
    console.error(error);
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





const [fruit, setFruit] = useState({
  color: 'red',
  name: 'apple',
});

const changeColor = (newColor) => {
  const updatedFruit = {
    ...fruit,
    color: newColor,
  };

  setFruit(updatedFruit);
};



const [colors, setColors] = useState(['red', 'green']);

const addColorAtIndex = (colorToAdd, index) => {
  const updatedColors = [
    ...colors.slice(0, index),
    colorToAdd,
    ...colors.slice(index),
  ];
  setColors(updatedColors);
};


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}


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
        .fill("Get the scroll position onScroll in react.")
        .map((f, i) => {
          return <p key={i}>{f}</p>;
        })}
    </div>
  );
}

