import React from "react";
// import { v4 as uuid } from "uuid";

function ItemForm({formName, formCategory, formCategoryChange, formNameChange, handleNewItem}) {
  return (
    <form className="NewItem" onSubmit={e => handleNewItem(e, formName, formCategory)}>
      <label>
        Name:
        <input type="text" name="name" value={formName} onChange={e => formNameChange(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={formCategory} onChange={e => formCategoryChange(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
