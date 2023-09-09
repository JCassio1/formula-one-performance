import { STYLES } from '../../Helpers/Config'
import Spinner from 'react-bootstrap/Spinner'

const Loading = ({ loadingText }) => {
  return (
    <>
      <p>
        <strong style={STYLES.marginRight(12)}>{loadingText}</strong>
        <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' style={STYLES.marginRight(10)} />
      </p>
    </>
  )
}

export default Loading
