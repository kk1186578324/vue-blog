var express = require('express');
var router = express.Router();
var article = require('./../models/article');



router.post("/add",function(req,res,next){
  console.log(req);
  var param = {
    title:req.body.name,
    tag:req.body.password,
    content:req.body.content
  }
  // str.replace(/</?[a-zA-Z]+[^><]*>/g,"")
  console.log(param);
  article.create(param,function(err,doc){
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
});

module.exports = router;
