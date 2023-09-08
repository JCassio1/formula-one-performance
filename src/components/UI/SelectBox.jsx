import Form from 'react-bootstrap/Form'

function SelectBox({ selectTitle, displaySelectLogic, selectAria, selectData, handleOnChange }) {
  return (
    <Form.Group controlId='formBasicBrand'>
      <Form.Select aria-label={selectAria} onChange={handleOnChange}>
        <option>{selectTitle}</option>
        {selectData && selectData.map((data) => displaySelectLogic(data))}
      </Form.Select>
    </Form.Group>
  )
}

export default SelectBox
