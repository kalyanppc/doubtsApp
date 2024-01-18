const {Router} = require("express");
const { Admin, Doubt } = require("../db");
const jwt = require("jsonwebtoken");
const  JWT_SECRET = require("../pass");

const adminMiddleware = require("../middlewares/admin");
const router = Router();

router.post("/signup",async (req,res)=>{
      const {username,email,password} = req.body;
      const newAdmin = await Admin.create({
            username,
            email,
            password
      })
      console.log(newAdmin);
      res.json({
            msg: "Admin created succesfully"
      })
}
)
router.post("/signin",async (req,res)=>{
      const {username,email,password} = req.body;
      console.log(username,email,password);
      const admin = await Admin.findOne({
            username,
            email,
            password
      })
      console.log(admin);
      console.log(JWT_SECRET);
      if(!admin){
            return res.status(411).json({
                  msg : "wrong credentials given"
            })
      }
      const token = jwt.sign({username,email},JWT_SECRET);
      res.json({
            token
      })
})
router.get('/doubts',adminMiddleware,async(req,res)=>{
      const doubts = await Doubt.find({})
      // Test this code which was changed (It should now only show unanswered doubts).
      const unansweredDoubts = doubts.filter((doubt)=>{
            return !doubt.isanswered;
      })
      res.json({
            unansweredDoubts
      })
})
router.put('/answer',adminMiddleware,async(req,res)=>{
      // Test this code what was changed was that isanswered feild was added and when a question was answered the isanswered feild should become true.
      const {_id,answer} = req.body;
      try{const updatedAns = await Doubt.updateOne({
            _id
      },{
            answer,
            isanswered: true
      })
      console.log(updatedAns);
      res.status(400).json({
            msg: `You have answered the question of id number ${_id}`
      })}catch(e){
            res.status(403).json({
                  msg: "wrong question _id number was given"
            })
      }
})

module.exports = router;