import React, { useState } from 'react';
import { Button, Checkbox, Form, List, Divider } from 'semantic-ui-react';

function AddToList({ handleChange, type, children, listArr }) {
  const [newItem, setNewItem] = useState('');
  const handleOnChange = (e, { name, value }) => setNewItem(`${value}`);

  const addItem = e => {
    e.preventDefault();
    // console.log('listArr', listArr);
    if (newItem.length > 0 && typeof newItem === 'string') {
      // console.log('listArr', listArr);
      handleChange(e, { name: type, value: [...listArr, newItem] });
      setNewItem('');
    }
  };

  //creates list of item elements
  const items =
    listArr &&
    listArr.map((item, i) => {
      return <List.Item key={i}>{item}</List.Item>;
    });

  return (
    <Form.Field>
      <Form.Input
        // label={`${type.toUpperCase()}`}
        placeholder={`${type.replace(/s$/, '')} name`}
        width={6}
        onChange={handleOnChange}
        value={newItem}
      />
      {children}
      <List celled ordered>
        {items}
      </List>
      <Button
        circular
        icon="add"
        onClick={addItem}
        content={`Add ${type.replace(/s$/, '')}`}
      />
    </Form.Field>
  );
}

export default AddToList;
