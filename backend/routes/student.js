const {Router} = require("express");
const { Student } = require("../db");
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

module.exports = router;