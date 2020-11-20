import React from 'react'
//TODO: material ui inputs
import styled from 'styled-components'
import useScript from '../hooks/useScript'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

const StyledFont = styled.p`
  font-family: sans-serif;
`

const Layout = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  width: 80%;
`

const Chat = (props) => {
  const [typing, setTyping] = React.useState('')
  return (
    <Layout>
      <p>chat room</p>
      <StyledFont>chat room</StyledFont>
      {/*TODO: roboto 폰트 적용*/}
      <Input
        style={{ width: 500, marginRight: 10 }}
        placeholder={'입력해주세요...'}
        value={typing}
        onChange={(event) => {
          setTyping(event.target.value)
        }}
      />

      <Button variant="contained" color="primary">
        submit
      </Button>
    </Layout>
  )
}

export default Chat
