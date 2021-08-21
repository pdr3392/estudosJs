/* const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
}; */

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("ERROR 404");

    const html = await response.text();
    carregaResultados(html);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultados(response) {
  const resultados = document.querySelector(".resultado");
  resultados.innerHTML = response;
}

fetch("pagina2.html")
  .then((resposta) => {
    if (resposta.status !== 200) throw new Error("Error");
    return resposta.text();
  })
  .then((html) => console.log(html))
  .catch((err) => console.error(err));
