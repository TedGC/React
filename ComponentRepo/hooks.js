import { useState } from "react";

const data = [
  { name: "Delhi",
    cities: ["Siri", "Sultanpur", "Tughlqabad", "Jahanpanah", "Firozobad"]
  },
  { name: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Jalgaon"]
  },
  { name: "West Bengal",
    cities: ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Baharampur"]
  },
  { name: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"]
  }
];

export default function App() 
{
  const [capitals, setCapitals] = useState("");
  const [cities, setCities] = useState([]);

  function updateSelect(e) {
    setCapitals(e.target.value); // Saving state of current selected drop down 1
    if (capitals !== undefined) {
      // Finding and saving the data for drop dop 2 related to the data of drop down 1
      setCities(data.find((data) => data.name === e.target.value).cities); 
    }
  }
  return (
    <div>
      <select value={capitals} onChange={updateSelect}>
        <option disabled> --- SELECT --- </option>
        {data.map((capital) => {
          return <option value={capital.name}>{capital.name}</option>;
        })}
      </select>
      <select>
        <option selected disabled> --- SELECT --- </option>
        {cities.map((city) => {
          return <option value={city}>{city}</option>;
        })}
      </select>
    </div>
  );
}



import React, { useState } from "react";
import { useCookies } from "react-cookie";

const App = () => {

  const [name, setName] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  const handle = () => {
    setCookie("name", name, { path: "/" });
  };
  return (
    <div className="App">
      <h1> Cookies in React </h1>
      <input
        placeholder="Cookie value"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handle}>Set Cookie</button>
      
      {cookies.name && (
        <div>Name: {cookies.name}</div>
      )}
    </div>
  );
};
export default App;


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
}



import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  rootElement
);



import React from "react";
import { withRouter } from "react-router";

class Page2 extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <h2>This is the second page.</h2>
        <br />
        <button
          onClick={() => {
            history.push("/page3");
          }}
        >
          Go to Page 3 &#x2192;
        </button>
      </div>
    );
  }
}

export default withRouter(Page2);


import React from "react";
import { Redirect, Switch, Route, withRouter } from "react-router";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Store the previous pathname
    this.currentPathname = null;
  }

  componentDidMount() {
    const { history } = this.props;

    history.listen((newLocation, action) => {
      if (action === "PUSH") {
        if (newLocation.pathname !== this.currentPathname) {
          // Save new location
          this.currentPathname = newLocation.pathname;

          // Clone location object and push it to history
          history.push({
            pathname: newLocation.pathname
          });
        }
      } else {
        // Send user back if they try to navigate back
        history.go(1);
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/page1" />} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>
    );
  }
}

export default withRouter(App);