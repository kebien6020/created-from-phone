import React from 'react'
import ReactDOM from 'react-dom'
import { ReverseText } from './ReverseText'
import { styled } from '@material-ui/core'
import { ThingList } from './ThingList'

const App = () => {
  return (
    <Wrapper>
      <ReverseText />
      <ThingList />
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 32,
})

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
