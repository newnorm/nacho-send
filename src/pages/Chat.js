import React from 'react'
//TODO: material ui inputs
import styled from 'styled-components'
import useScript from '../hooks/useScript'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import produce from 'immer'

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
  const [contents, setContents] = React.useState([])
  const contentsArray = []

  React.useEffect(() => {
    // setContents(contentsArray)
    // contentsArray.push(typing)
    setTyping('')
  }, [contents])

  return (
    <Layout>
      <h1>chat room</h1>
      {/*<StyledFont>chat room</StyledFont>*/}
      {/*TODO: roboto 폰트 적용*/}
      <Input
        style={{ width: 500, marginRight: 10 }}
        placeholder={'입력해주세요...'}
        value={typing}
        onChange={(event) => {
          setTyping(event.target.value)
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // setContents(contentsArray)
          // contentsArray.push(typing)
          setContents(
            produce(contents, (draft) => {
              draft.push(typing)
            })
          )
        }}
      >
        submit
      </Button>
      {contents.map((content, index) => {
        return (
          <>
            <div key={index.toString()}>{content}</div>
            <br />
          </>
        )
      })}
    </Layout>
  )
}

export default Chat
