import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

function UICard({ displayText, constructorRaceData }) {
  return (
    <Card style={{ backgroundColor: 'rgb(22, 21, 30)' }}>
      <Card.Header style={{ color: 'white' }}>Results - Highlights and analysis</Card.Header>
      <Card.Body>
        <Card.Title style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>
          {constructorRaceData.raceName} 🏁
        </Card.Title>
        <Badge pill bg='primary' style={{ fontSize: 17, fontWeight: 'bold' }}>
          {constructorRaceData.Circuit.Location.country}
        </Badge>
        <div className='mt-3' style={{ color: 'white' }}>
          {displayText}
        </div>
      </Card.Body>
    </Card>
  )
}

export default UICard
