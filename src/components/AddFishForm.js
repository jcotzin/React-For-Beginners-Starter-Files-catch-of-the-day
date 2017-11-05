import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('hi')
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input)type="text" placeholder="Fish Name"/>
        <input ref={(input) => this.price = input)type="text" placeholder="Fish Price"/>
        <selectref={(input) => this.status = input)>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input)placeholder="Fish Desc"></textarea>
        <input ref={(input) => this.image = input)} type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
