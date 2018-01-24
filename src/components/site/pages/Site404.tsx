import * as React from 'react'
import { Card } from 'material-ui/Card'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default function Site404() {
  const styles: any = {
    card: {
      padding: 15,
      marginTop: 15
    },
    text: {
      textAlign: 'center'
    }
  }
  return (
    <Grid fluid={true}>
      <Row>
        <Col md={4} mdOffset={4}>
          <Card
            style={styles.card}
          >
            <h2 style={styles.text}>404 Not Found</h2>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}