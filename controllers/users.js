export function index(req, res) {
  let json = {
    "nome": "User",
  };
  res.send(json);
}

export function login(req, res) {
  let json = {
    "nome": "Login",
  };
  res.send(json);
}
