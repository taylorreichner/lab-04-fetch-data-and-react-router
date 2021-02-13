import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        return (
            <div>
            <select className="drops"
            value={this.props.currentValue}
            onChange={this.props.handleChange}
            >
            
            <option value={['shape']}>Shape</option>
            <option value={['ability_1']}>Ability 1</option>
            </select>
            <select
            value={this.props.currentValue2}
            onChange={this.props.handleChange2}
            >
            <option value={'ascending'}>ascending</option>
            <option value={'descending'}>descending</option>    
            </select>
            </div>
        )
    
    }
}