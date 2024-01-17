const {Router} = require("express");
const { Student, Doubt } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../pass");
const studentMiddleware = require("../middlewares/student");
const router = Router();

router.post("/signup",async (req,res)=>{
     const{username,email,password} = req.body;
      const newStudent = await Student.create({
            username,
            email,
            password,
            askedDoubts: []
      })
      console.log(newStudent);
      res.status(200).json({
            msg: 'Student creted succesfully'
      })
})
router.post("/signin",async (req,res)=>{
      const {username,email,password} = req.body;
      const student = await Student.findOne({
            username,
            email,
            password,
      })
      console.log(student);
      if(student){
            const token = jwt.sign({username,email},JWT_SECRET);
            res.json({
                  token
            })
      }
})
router.post("/doubt",studentMiddleware,async (req,res)=>{
      const {title,description} = req.body;
      const newDoubt = await Doubt.create({
            title,
            description,
            answer: "",
            isanswered: false
      })
      const newDoubtId = newDoubt._id;
      const studentUpdate = await Student.updateOne({
            username: req.username
      },{
            $push:{askedDoubts: newDoubtId}
      })
      console.log(studentUpdate);
      console.log(newDoubt);
      res.status(400).json({
            msg: 'Your doubt has been added'
      })
})
router.get('/answers',studentMiddleware,async (req,res)=>{
      /* hat you should do here is in the middleware you will get a token you get the username using that token and see the doubts _id's in their own array
      and get answers for those only */
      // also keept an is answered feild which will be kept false by default and when answered by the admin it should change to true and while filtering the 
      // answers only the answers who have been answered should be displayed. Or keep seperate windows for answerd questions and unanswered questions.
      const username = req.username;
      const student = await Student.findOne({username:username})
      console.log(student.askedDoubts);
      const ids = student.askedDoubts;
      const doubts = await Doubt.find({_id:{$in:ids}})
      console.log(doubts);
      let answeredDoubts = doubts.filter((doubt)=>{
            return doubt.isanswered
      });
      console.log(answeredDoubts);
      res.json({
            answeredDoubts
      })
})

module.exports = router;