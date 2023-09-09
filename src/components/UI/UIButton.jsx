import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { STYLES } from '../../Helpers/Config'

const UIButton = ({ buttonText, buttonVariant, handleOnClick, isDisabled, isLoading }) => {
  return (
    <Button onClick={handleOnClick} variant={buttonVariant} onChange={handleOnClick} disabled={isDisabled}>
      {isLoading && (
        <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' style={STYLES.marginRight(10)} />
      )}
      {!isLoading ? buttonText : 'Loading..'}
    </Button>
  )
}

export default UIButton
