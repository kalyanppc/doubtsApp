const {Router} = require("express");
const { Student, Doubt } = require("../db");
const router = Router();

router.post("/signup",async (req,res)=>{
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      const newStudent = await Student.create({
            username,
            email,
            password
      })
      console.log(newStudent);
      res.status(400).json({
            msg: 'Student creted succesfully'
      })
})
router.post("/doubt",async (req,res)=>{
      const title = req.body.title;
      const description = req.body.description;
      const newDoubt = await Doubt.create({
            title,
            description,
            answer: "",
            isanswered: false
      })
      console.log(newDoubt);
      res.status(400).json({
            msg: 'Your doubt has been added'
      })
})


// This should be in the admin section in which you can keep it as answer router or something, which can be used for answering the doubt.

// router.put("/updateDoubt",async (req,res)=>{
//       const _id = req.headers._id;
//       const answer = req.body.answer;
//       const updatedDoubt = await Doubt.updateOne({
//             _id
//       },{
//             answer
//       });
//       console.log(updatedDoubt);
//       res.json({
//             msg: "updated the answer"
//       })
// })


router.get('/answers',async (req,res)=>{
      /* hat you should do here is in the middleware you will get a token you get the username using that token and see the doubts _id's in their own array
      and get answers for those only */
      // also keept an is answered feild which will be kept false by default and when answered by the admin it should change to true and while filtering the 
      // answers only the answers who have been answered should be displayed. Or keep seperate windows for answerd questions and unanswered questions.
      const _id = req.headers._id;
      const answers = await Doubt.findOne({_id});
      console.log(answers);
      res.json({
            msg: "The answers are given"
      })
})

module.exports = router;