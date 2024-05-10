import express from 'express'
const route =express.Router()

route.get("/",(req,res)=>{
    res.send("app is running")
})

export default route;