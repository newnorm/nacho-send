import React from 'react'
//TODO: material ui inputs
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import produce from 'immer'
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles'

import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { green } from '@material-ui/core/colors'

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

const Layout = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  width: 50%;
`

const InputWrapper = styled.p`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Chat = (props) => {
  const [typer, setTyper] = React.useState('newnorm')
  const [typing, setTyping] = React.useState('')
  const [contents, setContents] = React.useState([])
  const contentsArray = []

  const classes = useStyles()

  React.useEffect(() => {
    // setContents(contentsArray)
    // contentsArray.push(typing)
    setTyping('')
  }, [contents])

  return (
    <Layout>
      <h1 style={{ color: '#92cd28' }}>Nacho Chat</h1>
      {/*<StyledFont>chat room</StyledFont>*/}
      <InputWrapper>
        <CssTextField
          id="custom-css-standard-input"
          label={`${typer} 's saying...`}
          style={{ width: 800, marginRight: 10, marginBottom: 20 }}
          placeholder={'입력해주세요...'}
          value={typing}
          onChange={(event) => {
            setTyping(event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && typing) {
              setContents(
                produce(contents, (draft) => {
                  draft.push(typing)
                })
              )
            }
          }}
        />

        <Button
          variant="contained"
          style={{ backgroundColor: '#e4ff7f', height: 40 }}
          onClick={() => {
            // setContents(contentsArray)
            // contentsArray.push(typing)
            if (typing) {
              setContents(
                produce(contents, (draft) => {
                  draft.push(typing)
                })
              )
            }
          }}
        >
          send
        </Button>
      </InputWrapper>

      {contents
        .slice(0)
        .reverse()
        .map((content, index) => {
          //원본은 바꾸지 않고 얕은 복사 한 후 reverse 후 map
          return (
            <>
              <div style={{ color: '#f78914' }} key={index.toString()}>
                {typer} : {content}
              </div>
              <br />
            </>
          )
        })}
    </Layout>
  )
}

export default Chat
