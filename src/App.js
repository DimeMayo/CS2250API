import React from "react";

const App = () => {
  const [holidays, setHolidays] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://date.nager.at/api/v2/publicholidays/2023/US")
      .then((res) => res.json())
      .then((json) => {
        setHolidays(json);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Please chill, data is still loading </h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1> Holidays </h1>
      {holidays.map((holiday) => (
        <ul key={holiday.id}>
          <li>
            
            <h2>Holiday: {holiday.localName}</h2>
            Date: {holiday.date}
			<br />Other Names: {holiday.name}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
