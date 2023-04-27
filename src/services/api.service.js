
const data = {
    user:"john.1701627015@ucaldas.edu.co",
    password: "1234"
}
const login = async () => {
  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  console.log(json);
};


export default login;
