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
