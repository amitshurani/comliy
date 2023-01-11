const authenticate = (req,res,next)=>{
    if(req.method ==='GET')
      console.log("authenticating ....")
    next();
  }

module.exports = authenticate