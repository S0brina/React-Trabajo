function Categories(props) {
  return (
    <div className="mt-3 mb-4">
      <select
        className="form-select"
        onChange={(evt) => {
          props.onFiltrar(evt.target.value, props.restaurante);
        }}
      >
        <option value={-1}>Todo</option>
        {props.categorias.map((ctg) => {
          return (
            <option key={ctg.id} value={ctg.id}>
              {ctg.categoria}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Categories;