function Categorias(props) {
  return (
    <><h3>Categorias registradas</h3><table className="table table-hover">
      <thead>
        <tr>
          <th>ID Categoria</th>
          <th>Categoria</th>
        </tr>
      </thead>

      <tbody>
        {props.categorias.map((cat) => {
          const { id, categoria } = cat;
          return (
            <>
              <tr>
                <td>{id}</td>
                <td>{categoria}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table></>
  );
}
export default Categorias;
