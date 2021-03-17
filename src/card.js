// import React from 'react'
// import { Button, Card, Image } from 'semantic-ui-react'

// const CardExampleCard = () => (
//   <Card.Group>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           width="30%"
//           src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
//         />
//         <Card.Header>Steve Sanders</Card.Header>
//         <Card.Meta>Friends of Elliot</Card.Meta>
//         <Card.Description>
//           Steve wants to add you to the group <strong>best friends</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           width="30%"
//           src='https://react.semantic-ui.com/images/avatar/large/molly.png'
//         />
//         <Card.Header>Molly Thomas</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Molly wants to add you to the group <strong>musicians</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           width="30%"
//           src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
//         />
//         <Card.Header>Jenny Lawrence</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Jenny requested permission to view your contact details
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//   </Card.Group>
// )

// export default CardExampleCard


import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './card.css'

const CardExampleCard = () => (
  <Card.Group>
  <Card className="center" >
    <Image className="photo" src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} 
        //   height={350}
        width="30%"
    />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="hi">
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  </Card.Group>
)

export default CardExampleCard
