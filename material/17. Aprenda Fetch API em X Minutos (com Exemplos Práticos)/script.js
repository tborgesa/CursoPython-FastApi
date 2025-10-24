fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: 1,
    id: 946,
    title: "lahskjahskjahsajkh",
  }),
})
  .then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    } else {
      console.log("Deu erro!");
    }
  })
  .then((json) => console.log(json))
  .catch((erro) => console.log(erro));
