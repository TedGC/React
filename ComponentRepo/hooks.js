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

