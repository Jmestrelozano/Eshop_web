export const peticiones = async (url, method = "GET", body) => {
  let respuesta = await fetch(`${url}`, {
    method,
    body: JSON.stringify(body),
  });

  let obtener = await respuesta.json();
  return obtener;
};
