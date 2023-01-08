const jwt = require('jsonwebtoken');
const JWT_KEY = '392980c66ecb9dc4e599a5314446ae44';

const JWTMiddleware = (request, response, next) => {
  const authorization = request.headers.authorization;
  if(!authorization) {
    next();
    return;
  }

  const token = authorization.replace('Bearer ', '');    

  try {
      const tokenPayload = jwt.verify(token, JWT_KEY);
      request.tokenPayload = tokenPayload;
      next();
  } catch (e) {
      return response.send("invalid token");
  }    
}

module.exports = JWTMiddleware;