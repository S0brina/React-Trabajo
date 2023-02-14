import React from "react";

function Categories(props){
  return<div className="btn-container cont-cat" data-toggle="butons"
    onClick={function(evt) {props.onFiltrar(evt.target.value)}}>
        <input type="radio" name="options" value={-1}>Todas</input>
        {
          props.category.map(function(cat){
            return <input value={cat.id}>{cat.nombre}</input>
          })
        }
   </div>     
}
export default Categories
/*
const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="btn-container cont-cat ">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
*/