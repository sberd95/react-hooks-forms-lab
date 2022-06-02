import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formCategory, setFormCategory] = useState('Produce')
  const [formName, setFormName] = useState('')

  function handleNewItem(e){
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formName,
      category: formCategory,
    }
    onItemFormSubmit(newItem)
  }
  return (
    <form className="NewItem" onSubmit={handleNewItem}>
      <label>
        Name:
        <input type="text" name="name" value={formName} onChange={e => setFormName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={formCategory} onChange={e => setFormCategory(e.target.value)}>
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
