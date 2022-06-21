import { Form, Button } from "react-bootstrap";
import axios from "axios";

import { useDispatch } from "react-redux";

import { SetWeather } from "../action/index";

const WeatherForm = () => {
  let dispatch = useDispatch();

  const getWeather = (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const apiKey = "acbd401a0545bb9dbad533a48947a94e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(url).then((response) => {
      //   console.log(response);
      //   console.log(response.data); // response.data is object // so set data according to properties of reponse.data object.
      let data = response && response.data;
      console.log(data, "------------from form.js---------");
      dispatch(SetWeather(data));
    });
    // .then((data) => {
    //   // console.log(data);
    //   console.log(data); // data is now a new object set on setData()

    //   // setData({
    //   //   temp: data.main.temp,
    //   //   temp_min: data.main.temp_min,
    //   //   temp_max: data.main.temp_max,
    //   //   description: data.weather[0].description,
    //   //   humidity: data.main.humidity,
    //   //   city: data.name,
    //   //   country: data.sys.country,
    //   // });
    // });
  };
  return (
    <>
      <Form className="form" onSubmit={getWeather}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>City:</Form.Label>
          <Form.Control type="text" placeholder="Enter City" name="city" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default WeatherForm;
