import { app } from './app'

const PORT = process.env.APP_PORT || 3333

app.listen(PORT, () => {
  console.log('Server start on APP_PORT')
})
