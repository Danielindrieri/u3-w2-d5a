import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import WeatherCard from './WeatherCard';

const FetchWeather = () => {
  const [city, setCity] = useState(''); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'b983c07d515f1e4ee998f141d383f19a'; 

  const fetchWeather = () => {
    if (!city.trim()) {
      setError('Porta pazienza');
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('API KEY FUNZIONA TI PREGO');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data); 
        setError(''); 
      })
      .catch((err) => {
        setWeatherData(null);
        setError(err.message); 
      });
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              fetchWeather(); 
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Inserisci il nome della città"
                value={city}
                onChange={(e) => setCity(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" className="mt-2" type="submit">
              Cerca
            </Button>
          </Form>
          {error && <p className="text-danger mt-2">{error}</p>} 
        </Col>
      </Row>

      {/* Mostra WeatherCard*/}
      {weatherData && (
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <WeatherCard weatherData={weatherData} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default FetchWeather;
