import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        return (
            <select className="drops"
            value={this.props.currentValue}
            onChange={this.props.handleChange}
            >
            {
                this.props.options.map(
                    listItem =>
                    <option value={listItem} key={listItem}> {listItem} </option>)
                
            } 
            </select>
              
        )
    
    }
}