import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles

export default function Loader() {
  return (
    <div>
        <FontAwesomeIcon icon={faSpinner}  spinPulse /> 
    </div>
  )
}
