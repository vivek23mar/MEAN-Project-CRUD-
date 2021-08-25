const jwt = require('jsonwebtoken')


module.exports.authenticateToken = async (req, res, next) => {
    try {
        const secretKey = 'SecretKsdafasdfafgaey';
        const authHeader = req.headers.authorization || '';

        const token = authHeader && authHeader.split('"')[1]; 

        if (token != null) {
            let decode = await jwt.verify(token, secretKey)
            console.log('Verify Token',decode);
           // res.send(decode);
            next();           
            
        } else {
            
            res.sendStatus(401).json({err:'invalid Verify Token'})
        }
    } catch (err) {
        res.send('invalid token', err)
    }


}