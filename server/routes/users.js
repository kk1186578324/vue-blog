var express = require('express');
var router = express.Router();
var User = require('./../models/user');



router.post("/login",function(req,res,next){
  // console.log(req);
  var param = {
    userName:req.body.name,
    userPwd:req.body.password
  }
  console.log(param);
  User.findOne(param,function(err,doc){
    if(err){
      console.log(err);
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      if(doc){
        console.log(doc);
        res.cookie("userId",doc.userId,{
          path:'/',
          maxAge:1000*60*60
        });
        res.cookie("userName",doc.userName,{
          path:'/',
          maxAge:1000*60*60
        })
        res.json({
          status:'1',
          msg:'',
          result:{
            userName:doc.userName,
            userPwd:doc.userPwd
          }
        })
      }else{
        User.create(param,function(err,doc){
          console.log(err,doc)
          if(err){
            console.log(err);
            res.json({
              status:'1',
              msg:err.message
            })
          }else{
            if(doc){
              res.json({
                status:'1',
              })
            }else{
              res.json({
                status:'0',
                msg:"账户名或密码错误"
              })
            }
          }
        })
      }
    }
  })
});

module.exports = router;
