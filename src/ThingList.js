import React, { useState, useEffect, useReducer } from 'react'
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  styled,
} from '@material-ui/core'
import { Formik } from 'formik'
import { createThing, listThings } from './api/things'

export const ThingList = () => {
  const [things, {refresh}] = useThings()
  return (
    <>
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
      </Paper>
      <AddSection refresh={refresh} style={{marginTop: 16}} />
    </>
  )
}

const AddSection = ({refresh, ...props}) => {
  const submit = async (values) => {
    await createThing(values)
    refresh()
  }

  return (
    <AddWrapper {...props}>
      <Formik
        initialValues={{name: ''}}
        onSubmit={submit}
      >
        {({submit, values, handleChange}) =>
          <form onSubmit={submit}>
            <TextField
              name='name'
              label='Add a new thing'
              value={values.name}
              onChange={handleChange}
              fullWidth
            />
          </form>
        }
      </Formik>
    </AddWrapper>
  );
}

const AddWrapper = styled(Paper)({
  padding: 16,
  paddingBottom: 8,
})

const useThings = () => {
  const [things, setThings] = useState(null)
  const [nonce, refresh] = useReducer(prev => prev + 1, 1)
  useEffect(() => {
    listThings().then(setThings)
  }, [nonce])
  return [things, {refresh}]
}

