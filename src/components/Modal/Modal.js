import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleBasic({word}) {
  const [open, setOpen] = React.useState(false)
 const link = `https://translate.google.com/?hl=en&sl=auto&tl=en&text=${word.word}&op=translate`

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='mini'
      trigger={<Icon name="eye large"/>}
      
    >
      <Header className="modHeader" icon>
        <Icon name='info' />
        About the word <span>{word.word}</span> 
      </Header>
      <Modal.Content className="modCont">
        <p>
       Word:  <span>{word.word}</span>
        </p>    
        <p>
       Part of speech:  <span>{word.partOfSpeech}</span> 
        </p>      
        <p>
       Transcription:  <span>[{word.tr}]</span> 
        </p>
        <p>
       Synonymous:  <span>{word.definition.join(", ")}</span>
        </p>
        <p>
       Google knows all about : <a target="_blank" href={link}>{word.word}</a>
        </p>
      </Modal.Content>
      <Modal.Actions className="modAct">
         <Button classname="butMod" color='blue' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Got it!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic
