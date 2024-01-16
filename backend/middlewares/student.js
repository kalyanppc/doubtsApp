const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../pass");

function studentMiddleware(req,res,next){
      const token = req.body.token;
      const words = token.split(" ");
      const jwtToken = words[1];
      try{
            const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
            if(decodedValue.username){
                  req.username = decodedValue.username;
                  next();
            }else{
                  res.status(411).json({
                        msg: "you are not authenticated"
                  })
            }
      }catch(e){
            res.status(403).json({
                  msg: 'wrong inputs were given'
            })
      }
}
module.exports = studentMiddleware;