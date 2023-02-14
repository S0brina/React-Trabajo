import { useState, useEffect } from "react";

const CatReg = () =>{
    
    function ItemRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.categoria}</td>
      <td>{props.fecha}</td>
    </tr>
  );
}

function ItemTable(props) {
  const itemRows = props.items.map(item => (
    <ItemRow
      key={item.id}
      id={item.id}
      cat={item.categoria}
      fecha={item.fecha}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>ID Registro</th>
          <th>Nombre</th>
          <th>Fecha Registro</th>
        </tr>
      </thead>
      <tbody>
        {itemRows}
      </tbody>
    </table>
  );
}

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/endpoints/hist/cat")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h1>Tabla de elementos</h1>
      <ItemTable items={items} />
    </div>
  );
}

};
export default CatReg;

