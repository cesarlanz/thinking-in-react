import React, { Component } from 'react'

class ProductRow extends Component {
    render() {
        const { price, stocked, name } = this.props.product
        return stocked ? <tr><td>{name}</td><td>{price}</td></tr> : <tr style={{color: 'red'}}><td>{name}</td><td>{price}</td></tr>
    }
}

export default ProductRow