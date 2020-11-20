import React from 'react'
//TODO: material ui inputs
import styled from 'styled-components'
import useScript from '../hooks/useScript'
import Button from '@material-ui/core/Button'

const StyledFont = styled.p`
  font-family: sans-serif;
`

const Chat = (props) => {
  return (
    <>
      <p>chat room</p>
      <StyledFont>chat room</StyledFont>
      {/*TODO: roboto 폰트 적용*/}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  )
}

export default Chat
