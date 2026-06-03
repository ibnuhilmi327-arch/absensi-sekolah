const express = require('express')

const app = express()

app.get('/', (req,res)=>{
  res.send('Website Absensi Berjalan')
})

app.listen(5000, ()=>{
  console.log('Server Running')
})
