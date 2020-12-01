import React, { useRef } from 'react'
//TODO: material ui inputs
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import io from 'socket.io-client'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ffa33f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffa33f',
    },
  },
})(TextField)

const Layout = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  width: 50%;
`

const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Chat = (props) => {
  const [yourId, setYourId] = React.useState('')
  const [messages, setMessages] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [broadCastMessage, setBroadCastMessage] = React.useState('')
  const socketRef = useRef()
  React.useEffect(() => {
    console.log('AAA');
    socketRef.current = io.connect('/')

    socketRef.current.on('your id', (id) => {
      setYourId(id)
    })

    socketRef.current.on('message', (message) => {
      setMessages((oldMsgs) => [...oldMsgs, message])
    })

    socketRef.current.on('broadcast', (message) => {
      console.log(message);
      setBroadCastMessage(message.id + ' is typing...')
    })


    socketRef.current.on('test', (message)=>{
      setBroadCastMessage(message)
    })

    // broadcastRef.current = socket.connect('/')
    //
    // broadcastRef.current.on('broadcast', (message) => {
    //   setBroadCastMessage(message.id + ' is typing...')
    // })
  }, [])
  return (
    <Layout>
      <h1 style={{ color: '#92cd28' }}>Nacho Chat</h1>
      <InputWrapper>
        <CssTextField
          id="custom-css-standard-input"
          label={`${yourId} 's saying...`}
          style={{ width: 800, marginRight: 10, marginBottom: 20 }}
          placeholder={'입력해주세요...'}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value)
            setBroadCastMessage("someone is typing...")
            const messageObject = {
              body: message,
              id: yourId,
            }
            socketRef.current.emit('do broadcast', messageObject)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && message) {
              const messageObject = {
                body: message,
                id: yourId,
              }

              setMessage('')
              socketRef.current.emit('send message', messageObject)
            }
          }}
        />

        <Button
          variant="contained"
          style={{ backgroundColor: '#e4ff7f', height: 40 }}
          onClick={() => {
            const messageObject = {
              body: message,
              id: yourId,
            }
            setMessage('')
            socketRef.current.emit('send message', messageObject)
          }}
        >
          send
        </Button>
      </InputWrapper>
      <div style={{ color: '#ffa33f', marginBottom: 20 }}>
        {broadCastMessage || 'No one is typing now!'}
      </div>
      {messages &&
        messages
          ?.slice(0)
          .reverse()
          .map((message, index) => {
            //원본은 바꾸지 않고 얕은 복사 한 후 reverse 후 map

            if (message.id === yourId) {
              return (
                <div key={index.toString()}>
                  <div style={{ color: '#f78914' }}>{message.body}</div>
                  <br />
                </div>
              )
            }

            return (
              <div key={index.toString()}>
                <div style={{ color: '#92cd28' }}>{message.body}</div>
                <br />
              </div>
            )
          })}
    </Layout>
  )
}

export default Chat
