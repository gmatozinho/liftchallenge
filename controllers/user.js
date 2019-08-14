const jwt = require('jsonwebtoken');

export function index(req, res) {
  let json = {
    "nome": "User",
  };
  res.send(json);
}

export function login(req, res) {
  
  //Buscaria determinado usuário no banco e confirmaria a password (num cenário real usando criptografia)

  const findedpassword = '12345678'
  const finded = true;
  // Mock user
  /* const user = {
    username: 'gustavo',
    password: '12345678'
  } */


  if(finded && req.body.password === findedpassword){
    //auth ok
    const id = 1; //esse id viria do banco de dados

    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
  }else {
    res.status(500).send('Login inválido!');  

  }

}

export function logout(req, res) {
  res.status(200).send({ auth: false, token: null });
}

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
export function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });

}

