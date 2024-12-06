import Nav from 'react-bootstrap/Nav';

function BasicExample() {
  return (
    <Nav className='bg-info pb-3'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link className='text-secondary pt-3' href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-secondary pt-3' href="/Previsioni">Previsioni</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-secondary pt-3' href="/Mappe">Mappe</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-secondary pt-3' Linkhref="/situazione">Situazione</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;