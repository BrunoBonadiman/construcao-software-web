// const jwt = require('jsonwebtoken');

// module.exports.verifyJwtToken = (req, res, next) => {
//     var token;
//     if ('authorization' in req.headers)
//         token = req.headers['authorization'].split(' ')[1];

//     if (!token)
//         return res.status(403).send({
//             auth: false,
//             message: 'Nenhum token fornecido.'
//         });
//     else {
//         jwt.verify(token, process.env.JWT_SECRET,
//             (err, decoded) => {
//                 if (err)
//                     return res.status(500).send({
//                         auth: false,
//                         message: 'A autenticação do token falhou.'
//                     });
//                 else {
//                     req._id = decoded._id;
//                     next();
//                 }
//             }
//         )
//     }
// }

const jwt =  require('jsonwebtoken');

const verifyJwtToken = (req,res,next)=>{
    let token = req.headers['x-access-token']|| req.headers['authorization'];
    if(!token)
        return res.status(401).json({mensagem:"Informe o token"});
    if(token.toString().startsWith('Bearer ')){
        token = token.slice(7,token.toString().length);
    }
    if(token){
        jwt.verify(token,'najuleflix',(err,decoded)=>{
            if(err){
                return res.json({
                    success:false,
                    mensagem:"Token invalido"
                })
            }else{
                res.locals.auth_data = decoded;
                req.decoded = decoded;
                next();
            }
        })
    }
    else{
        return res.json({
            success:false,
            mensagem:"Token não informado"
        })
    }
  
}
module.exports = verifyJwtToken;