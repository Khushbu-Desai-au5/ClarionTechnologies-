import React, { Component } from 'react';
import AddProduct from './AddProduct';



class Dashboard extends Component {
    state = {
        name: '',
        products: [
            {
                id: 1,
                name: 'Laptop',
                rate: 43500,
                quality: [1, 2, 3]
            },
            {
                id: 2,
                name: 'Desktop',
                rate: 30000,
                quality: [1, 2, 3]
            },
            {
                id: 3,
                name: 'Keyboard',
                rate: 900,
                quality: [1, 2, 3]
            },
            {
                id: 4,
                name: 'SSD',
                rate: 5500,
                quality: [1, 2, 3]
            },
            {
                id: 5,
                name: 'HDD',
                rate: 4500,
                quality: [1, 2, 3]
            }
        ],
        isAddProduct: false
    }

    componentDidMount() {

        if (this.props.location) {
            let email = this.props.location.state && this.props.location.state.email || ''
            let name = email.split('@')[0]
            this.setState({ name: name })
        }
    }
    deleteProduct = (product) => {
        const products = this.state.products
        const pIndex = products.findIndex(p => p.id === product.id)
        console.log(pIndex)
        products.splice(pIndex, 1)
        this.setState({ products: products })
    }

    handleCloseModal = () => {
        this.setState({ isAddProduct: false })
    }

    handleAddProduct = (product) => {
        const newProducts = [...this.state.products]
        newProducts.push(product)
        this.setState({ products: newProducts })
    }
    render() {
        if (this.state.isAddProduct) {
            return (
                <AddProduct closeModal={this.handleCloseModal} addProduct={this.handleAddProduct} />
            )

        }
        return (
            <div className='container'>
                <h2>Hi {this.state.name}</h2>
                <button className='btn btn-info mb-2' data-target="#exampleModal" onClick={() => this.setState({ isAddProduct: true })} >Add Product</button>
                {
                    this.state.products.map(product => {
                        return (
                            <div className="card" key={product.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.rate}</p>
                                    <a href='#' className="card-link" onClick={() => this.deleteProduct(product)}>Delete Product</a>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}


export default Dashboard
