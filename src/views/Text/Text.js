import { useState, useEffect } from "react";
import useFetch from "../../customize/fetch";
const Text = () => {
  const [showText, setShowText] = useState(false);

  const { data: dataCovidSouthAfrica } = useFetch(
    "https://api.covid19api.com/country/vietnam?from=2022-07-01T00:00:00Z&to=2022-07-22T00:00:00Z"
  );

  const handleShowHide = () => {
    setShowText(!showText);
  };
  return (
    <>
      <h3 style={{ margin: "0px" }}>Covid 19 tracking in South Africa</h3>
      {showText === true && (
        <>
          <table id="customers">
            <thead>
              <tr>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Deaths</th>
                <th>Recovered</th>
              </tr>
            </thead>
            <tbody>
              {dataCovidSouthAfrica &&
                dataCovidSouthAfrica.length > 0 &&
                dataCovidSouthAfrica.map((item) => {
                  return (
                    <tr key={item.ID}>
                      <td>{item.Date}</td>
                      <td>{item.Confirmed}</td>
                      <td>{item.Active}</td>
                      <td>{item.Deaths}</td>
                      <td>{item.Recovered}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button onClick={(event) => handleShowHide(event)}>Hide</button>
        </>
      )}
      {showText === false && (
        <button onClick={(event) => handleShowHide(event)}>Show</button>
      )}
    </>
  );
};
export default Text;
