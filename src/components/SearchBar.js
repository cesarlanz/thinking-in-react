import React, { Component } from 'react'

class SearchBar extends Component {

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <form>
                <p>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filterText}
                        onChange={this.handleFilterTextChange}
                    />
                </p>
                <p>
                    <label>
                        <input
                            type="checkbox"
                            checked={inStockOnly}
                            onChange={this.handleInStockChange}
                        />
                        Only show products in stock
                    </label>
                </p>
            </form>
        )
    }
}

export default SearchBar