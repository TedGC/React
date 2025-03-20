import Accordion from "./compoents/Accordion";


function App() {
  const items = [
    {
      id: 1023,
      label: 'react bro',
      content: 'you can use this bro'
    },
    {
      id: 23130,
      label: 'react bro',
      content: 'broah?'
    },
    {
      id: 'dfhlasdf',
      label: 'react bro',
      content: 'brooooo'
    }

  ]



  return (
    <Accordion items={items} />
  )
}

export default App;
