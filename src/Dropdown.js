import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        return (
            <div>
            <select className="drops"
            onChange={this.props.handleSortChange}
            >
            
            <option value={['shape']}>Shape</option>
            <option value={['ability_1']}>Ability 1</option>
            </select>
            <select
            onChange={this.props.handleSortChange2}
            >
            <option value={'asc'}>ascending</option>
            <option value={'desc'}>descending</option>    
            </select>
            </div>
        )
    
    }
}