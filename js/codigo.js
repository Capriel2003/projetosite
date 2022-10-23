var respf = '76';

function next1() {
  var resp = document.getElementById("resp1").value;

  if (resp == respf) {
    getUsuariosByFetch();
    respf = 'doloremque officiis ad et non perferendis';
  }
  else {
    window.alert("try again");
  }
  if (resp == 'doloremque officiis ad et non perferendis') {
    window.location.href = "Level2_RespondaAqui.html";
  }
}


function startGame() {
  window.location.href = "Level1.html";
}


function pegaDados(dados) {
  dados.forEach(obj => {
    criaTabela(obj.id, obj.title, obj.body);
  });
}

function criaTabela(id, title, body) {

  const tbody = document.getElementById("tabela");
  const tr = document.createElement("tr");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");

  td2.innerText = id;
  td3.innerText = title;
  td4.innerText = body;

  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  tbody.appendChild(tr);
}

function getUsuariosByFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => pegaDados(json))
    .catch(() => console.log("erro na requisicao"));
}

var respf3 = '1';
function next3() {
  var resp = document.getElementById("resp3").value;

  if (resp == 'noruegues') 
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  
  else if (resp != 'noruegues') 
    window.alert("seu corno, faz direito");

}

function Respostas() {
  const div = document.getElementById("dicasResp");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  div1.innerText = Irlandes;
  td3.innerText = Noruegues;
  td4.innerText = Finlandes;

  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
}







