var express = require('express');
var router = express.Router();
var article = require('./../models/article');



router.post("/add",function(req,res,next){
  var param = {
    title:req.body.title,
    tag:req.body.tag,
    content:req.body.content,
    date: formatterDateTime(new Date())
  }

  article.create(param,function(err,doc){
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
router.get("/page",function(req,res,next){
  let page = parseInt(req.param("page"));
  let pageSize = parseInt(req.param("pageSize"));
  let skip = (page-1)*pageSize;
  // skip(skipnumber).limit(limit).sort(sort)
  article.find({},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      })
    }else{
      if(doc){
        console.log(doc)
        res.json({
          status:'1',
          content:doc
        })
      }else{
        res.json({
          status:'0',
          msg:"查询错误！"
        })
      }
    }
  }).skip(skip).limit(pageSize)
});


router.get("/list",function(req,res,next){
  article.count({},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      })
    }else{
      if(doc){
        res.json({
          status:'1',
          content:doc
        })
      }else{
        res.json({
          status:'0',
          msg:"查询错误！"
        })
      }
    }
  })
});



//文章删除
router.get("/del", function (req,res,next) {
  var id = req.query.id;
  article.remove({
    _id:id
  }, function (err,doc) {
    if(err){
      res.json({
        status:'0',
        msg:err.message,
        result:''
      });
    }else{
      res.json({
        status:'1',
        msg:'',
        result:'suc'
      });
    }
  });
});
//文章删除
router.get("/detail", function (req,res,next) {
  var id = req.query.id;
  article.findOne({
    _id:id
  }, function (err,doc) {
    if(err){
      res.json({
        status:'0',
        msg:err.message,
        result:''
      });
    }else{
      res.json({
        status:'1',
        content:doc
      });
    }
  });
});
function formatterDateTime(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}
module.exports = router;
