const {Router} = require("express");
const { Admin } = require("../db");
const router = Router();

router.post("/signup",async (req,res)=>{
      const username = req.body.username;
      const email =  req.body.email;
      const password = req.body.password;
      const newAdmin = await Admin.create({
            username,
            email,
            password
      })
      console.log(newAdmin);
      res.json({
            msg: "Admin created succesfully"
      })
})

module.exports = router;