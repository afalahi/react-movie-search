import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Hit = ({ hit }) => {
  return (
    <Col>
      <Card
        style={{
          width: '20rem',
          marginBottom: 10,
          marginTop: 10,
          height: '13rem',
        }}
      >
        <Card.Img variant='top' src={hit.image} alt={hit.title} />
        <Card.Body>
          <Card.Title>{hit.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>({hit.year})</Card.Subtitle>
          <Card.Text>
            Genre: {hit.genre[0]}, {hit.genre[1]}
          </Card.Text>
          <Card.Text>Rating: {hit.rating}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Hit;
