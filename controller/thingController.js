/**
 * @module thingController
 */
const client = require('../utils/mongoUtil')
const getDate = require('../utils/getDateUtil')
const validate = require("../utils/ajvUtil")

/**
 * @description GET date
 * @param {*} ctx 
 * @param {*} next 
 */
async function date(ctx, next) { 
    ctx.body = getDate()  
}

/**
 * @description addThing
 * @param {*} ctx 
 * @param {*} next 
 */
async function addThing(ctx, next) {
    const info = ctx.request.body
    const newThing = {
      body:info.body,
      status:false,
      date:getDate(1),
      type:info.type,
      edit:0,
    }
    
    if(!validate(newThing)) return

    await client.connect()
    const db =  client.db("koa_test")
    const thingCol = db.collection("thingDB")
    
    let msg = await thingCol.insertOne(newThing)
    ctx.body = msg
    
  }

/**
 * @description deleteThing
 * @param {*} ctx 
 * @param {*} next 
 */
async function deleteThing(ctx, next) {
    //数据库操作
    await client.connect()
    const db =  client.db("koa_test")
    const thingCol = db.collection("thingDB")
    
    ctx.body = await thingCol.deleteOne(ctx.request.body)
    
}

/**
 * @description updateThing
 * @param {*} ctx 
 * @param {*} next 
 */
async function updateThing(ctx, next) {
    let oldBody = {
      body:ctx.request.body.oldBody
    }
    let newBody = {
      $set:{
        body:ctx.request.body.newBody
      }
    }
  
    await client.connect()
    let db =  client.db("koa_test")
    let thingCol = db.collection("thingDB")
    
    ctx.body = await thingCol.updateOne(oldBody,newBody)
}
/**
 * @description findThing
 * @param {*} ctx 
 * @param {*} next 
 */
async function findThing(ctx, next) {
    let findInfo = {
      type : parseInt(ctx.request.query.type)
    }
    let reqstatus = ctx.request.query.status
    
    if(reqstatus == 0){
      findInfo.status = false
    }else if(reqstatus ==  1){
      findInfo.status = true
    }
    await client.connect()
    const db =  client.db("koa_test")
    const thingCol = db.collection("thingDB")
   
    ctx.body = await thingCol.find(findInfo).toArray();
}

/**
 * @description changeEdit
 * @param {*} ctx 
 * @param {*} next 
 */
async function changeEdit(ctx, next) {
    const findInfo = {
      body:ctx.request.body.body
    }
    
    const changeInfo = {
      $set:{
        status:!ctx.request.body.status
      }   
    }
    await client.connect()
    const db =  client.db("koa_test")
    const thingCol = db.collection("thingDB")
   
    ctx.body = await thingCol.updateOne(findInfo,changeInfo) 
}



module.exports = {
    date,
    addThing,
    deleteThing,
    updateThing,
    findThing,
    changeEdit
}