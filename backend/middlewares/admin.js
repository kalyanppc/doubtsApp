const jwt = require("jsonwebtoken");
const JWT_SECRET = require('../pass');

function adminMiddleware(req,res,next){
      const token = req.body.token;
      const words = token.split(" ");
      const jwtToken = words[1];
      console.log(jwtToken);
      try{
            const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
            console.log(decodedValue);
            if(decodedValue.username){
                  next();
            }else{
                  res.status(403).json({
                        msg: "you are not authorized"
                  })
            }
      }catch(e){
            res.json({
                  msg: "Incorrect inputs"
            })
      }
}

module.exports = adminMiddleware;