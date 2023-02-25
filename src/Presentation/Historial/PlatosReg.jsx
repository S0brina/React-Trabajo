function PlatosReg(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID plato</th>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Descripcion</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {props.platos.map((plato) => {
          const { id, title, categoria , desc, price } = plato;
          return (
            <tr>
              <>
                <td>{id}</td>
                <td>{title}</td>
                <td>{categoria.nombreCat}</td>
                <td>{desc}</td>
                <td>{price}</td>
              </>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default PlatosReg;