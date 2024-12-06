import React from 'react';
import { Card, Button,} from 'react-bootstrap';


const WeatherCard = ({ weatherData, onSave }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className=''>{name}</Card.Title>
        <Card.Text>
          <strong>Temp:</strong> {(main.temp).toFixed(1)}°C
        </Card.Text>
        <Card.Text>
          <strong>Pressione:</strong> {(main.pressure)}
        </Card.Text>
        <Card.Text>
          <strong>Condizioni:</strong> {weather[0].description}
        </Card.Text>
          <Button variant="info" className="me-2">Details</Button>
        {onSave && (
          <Button variant="primary" onClick={onSave}>
            Save
          </Button>
        )}
        
      </Card.Body>
    </Card>
  );
};


export default WeatherCard;
