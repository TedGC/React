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