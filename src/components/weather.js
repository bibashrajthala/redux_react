import { Toast } from "react-bootstrap";

import { useSelector } from "react-redux";

const Weather = (props) => {
  const weather1 = useSelector((state) => state.weather); // selects from weather reducer
  console.log("-----weather from weather.js-----", weather1);

  //   //   temp: data.main.temp,
  //   //   temp_min: data.main.temp_min,
  //   //   temp_max: data.main.temp_max,
  //   //   description: data.weather[0].description,
  //   //   humidity: data.main.humidity,
  //   //   city: data.name,
  //   //   country: data.sys.country,
  const weather = weather1?.main;
  return (
    <div className="show__data">
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Temp:</strong>
        </Toast.Header>
        <Toast.Body>{weather1?.main?.temp}</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Temp_max:</strong>
        </Toast.Header>
        <Toast.Body>{weather1?.main?.temp_min}</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Temp_min:</strong>
        </Toast.Header>
        <Toast.Body>{weather1?.main?.temp_max}</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Description:</strong>
        </Toast.Header>
        <Toast.Body>{weather1?.weather?.[0]?.description}</Toast.Body>
      </Toast>
      {/* <Toast>
        <Toast.Header>
          <strong className="me-auto">Humidity:</strong>
        </Toast.Header>
        <Toast.Body>{weather1.main.humidity}</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">City:</strong>
        </Toast.Header>
        <Toast.Body>{weather1.name}</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Country:</strong>
        </Toast.Header>
        <Toast.Body>{weather1.sys.country}</Toast.Body>
      </Toast> */}
    </div>
  );
};

export default Weather;
