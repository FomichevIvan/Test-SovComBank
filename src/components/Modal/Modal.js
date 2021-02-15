import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleBasic({word}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Icon name="eye large"/>}
    >
      <Header icon>
        <Icon name='info' />
        About the word {word.word}
      </Header>
      <Modal.Content>
        <p>
       Word: {word.word}
        </p>        
        <p>
       Transcription: [{word.tr}]
        </p>
        <p>
       Synonymous: {word.definition.join(", ")}
        </p>
      </Modal.Content>
      <Modal.Actions>
         <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Got it!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic
