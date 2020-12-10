import React, { useState, useEffect, useReducer } from 'react'
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Paper,
} from '@material-ui/core'
import { Formik } from 'formik'
import { createThing, listThings } from './api/things'

export const ThingList = () => {
  const [things, {refresh}] = useThings()
  const handleSubmit = async (values) => {
    await createThing(values)
    refresh()
  }
  return (
    <Paper>
      <List>
        {things?.map((thing, idx) =>
          <ListItem key={idx}>
            <ListItemText>
              {thing.name}
            </ListItemText>
          </ListItem>
        ) ?? null}
      </List>
      <Formik
        initialValues={{name: ''}}
        onSubmit={handleSubmit}
      >
        {({handleSubmit, values, handleChange}) => <form onSubmit={handleSubmit}>
          <TextField
            name='name'
            value={values.name}
            onChange={handleChange}
          />
          <Button type='submit'>Submit</Button>
        </form>}
      </Formik>
      Cambios en tiempo real
    </Paper>
  )
}

const useThings = () => {
  const [things, setThings] = useState(null)
  const [nonce, refresh] = useReducer(prev => prev + 1, 1)
  useEffect(() => {
    listThings().then(setThings)
  }, [nonce])
  return [things, {refresh}]
}

