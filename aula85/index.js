function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Erro");
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

/* espera("Fase  1", rand(0, 3))
  .then((valor) => {
    console.log(valor);
    return espera("Fase 2", rand(0, 3));
  })
  .then((fase) => {
    console.log(fase);
    return espera("Fase 3", rand(0, 3));
  })
  .then((fase) => console.log(fase))
  .catch((err) => console.log(err)); */

async function executa() {
  try {
    const fase1 = await espera("Fase 1", rand(0, 3));
    console.log(fase1);

    const fase2 = await espera("Fase 2", rand(0, 3));
    console.log(fase2);

    const fase3 = await espera("Fase 3", rand(0, 3));
    console.log(fase3);

    console.log("Terminamos na fase:", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();
