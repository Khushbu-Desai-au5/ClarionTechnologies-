import React from 'react';
import { v4 as uuidv4 } from 'uuid';


class AddProduct extends React.Component {

    state = {
        pName: '',
        rate: '',
        quality: ''
    }
    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        })
    };
    handleAddProduct = () => {
        const id = uuidv4();
        const product = {
            id: id,
            name: this.state.pName,
            rate: this.state.rate
        }
        this.props.addProduct(product)
        this.props.closeModal()
    }


    render() {
        return (
            <div className='bg-model'>
                <div className='bg-content'>
                    <div class="form-group">
                        <label >Product Name</label>
                        <input type="text" value={this.state.pName} onChange={this.handleChange("pName")} class="form-control" />
                    </div>
                    <div class="form-group">
                        <label >Rate</label>
                        <input type="number" value={this.state.rate} onChange={this.handleChange("rate")} class="form-control" />
                    </div>
                    <div class="form-group">
                        <select class="custom-select">
                            <option selected>Choose Quality...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleAddProduct} className="btn btn-info">Add Product</button>
                        <button type="button" onClick={() => { this.props.closeModal() }} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>

        )
    }

}

export default AddProduct