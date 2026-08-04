const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router('mock-server/db.json');
const middleware = jsonServer.defaults()
const SECRET = 'poc-dev-secret';
server.use(jsonServer.bodyParser);
server.use(middleware);
server.post('/login',(request,response)=>{
    const {username,password} = request.body;
    const user = router.db.get('users').find({username}).value();
    if(!user||user.password!==password){
       return response.status(401).json({message: 'Invalid UserName and Password'});
    }
    const token = jwt.sign({id: user.id, username: user.username}, SECRET, {expiresIn: '1h'});
    const {password:_omit,...safeUser}= user;
    response.json({user: safeUser, token});
});
server.use(router);
server.listen(3000,()=>{
        console.log('Mock server running on http://localhost:3000')
});
