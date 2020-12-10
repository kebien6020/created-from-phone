import React, { useState } from 'react'
import { TextField, Typography, styled } from '@material-ui/core'

const reverse = str =>
  str.split('').reverse().join('')

export const ReverseText = props => {
  const [text, setText] = useState('')
  return (
    <Wrapper {...props}>
      <TextField
        label='Type here'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Typography variant='body1'>
        {reverse(text)}
      </Typography>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexFlow: 'column',
  '& > *': {
    marginBottom: 16,
  },
})
