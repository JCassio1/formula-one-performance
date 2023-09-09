import Alert from 'react-bootstrap/Alert'

const Error = ({ ErrorMessage }) => {
  return <Alert variant='danger'>{ErrorMessage}</Alert>
}

export default Error
