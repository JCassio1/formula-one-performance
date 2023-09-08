import Form from 'react-bootstrap/Form'

const UIYearPicker = ({ handleOnChange }) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <Form.Group controlId='formBasicYear'>
      <Form.Control
        type='number'
        placeholder='Enter Year'
        max={currentYear}
        min={1990}
        step={1}
        onChange={handleOnChange}
      />
    </Form.Group>
  )
}

export default UIYearPicker
