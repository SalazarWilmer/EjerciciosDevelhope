import Message from "./Message";
function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
    <Message/>
    </div>
  );
}

export default Hello;

/**
 * Respuesta al ejercicio 13, si uso mas de una vez mi componente Hello como observaran en el App.js
 * se agregara nuevamente la funcion de mi componente que en este caso sera un <h2>Hello, World!</h2>
 */
