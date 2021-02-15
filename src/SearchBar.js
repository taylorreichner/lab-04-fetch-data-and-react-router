import React from 'react';

export default class SearchBar extends React.Component {
    
    render() {
        return (
        <div>
            <input value={this.props.currentValue}
            onChange={this.props.handleChange}
           />
                
            
         </div> 
        );
    }
}
