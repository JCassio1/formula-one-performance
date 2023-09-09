import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { STYLES } from '../../Helpers/Config'

function UICard({ displayText, constructorRaceData }) {
  return (
    <Card style={STYLES.cardBgColor}>
      <Card.Header style={STYLES.colorWhite}>Results - Highlights and analysis</Card.Header>
      <Card.Body>
        <Card.Title style={STYLES.cardTitle}>{constructorRaceData.raceName} 🏁</Card.Title>
        <Badge pill bg='primary' style={STYLES.cardBadge}>
          {constructorRaceData.Circuit.Location.country}
        </Badge>
        <div className='mt-3' style={STYLES.colorWhite}>
          {displayText}
        </div>
      </Card.Body>
    </Card>
  )
}

export default UICard
