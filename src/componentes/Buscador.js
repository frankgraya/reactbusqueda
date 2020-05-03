import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = e => {
    e.preventDefault();

    //tomamos el valor el input
    const termino = this.busquedaRef.current.value;

    //lo enviamos al component principañ
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg "
              placeholder="Busca tu imagen. Ejemplo:futbol"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn-lg btn-danger btn-block"
              placeholder="Busca tu imagen. Ejemplo:futbol"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
