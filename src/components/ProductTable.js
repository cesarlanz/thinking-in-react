import React, { Component } from 'react'
import ProductTableHead from './ProductTableHead'
import ProductTableBody from './ProductTableBody'

class ProductTable extends Component {
    render() {
        const products = this.props.products
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <table>
                <ProductTableHead />
                <ProductTableBody
                    products={products}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
            </table>
        )
    }
}

export default ProductTable