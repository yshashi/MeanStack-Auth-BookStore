import jwt from 'jsonwebtoken';
import { CreateError } from './error.js';

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token)
        return next(CreateError(401, "You are not authenticated!"));
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            return next(CreateError(403, "Token is not Valid"));
        }else{
            req.user = user;
        }
        next();
    })
}

export const verifyUser = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(CreateError(403, "You are not authorized!"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(CreateError(403, "You are not authorized!"))
        }
    })
}