import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import './product-view.css'

function ProductView(props) {

    return (
        <Dialog maxWidth='lg' open={props.dialogState} onClose={props.handleClose}>
            <div className="big-img">
                <img src={props.product.photo} alt=""/>
              </div>
              <div className="box">
                <div className="row">
                  <h2>{props.product.name}</h2>
                  <span>${props.product.price}</span>
                </div>
                <p>{props.product.description}</p>
                <p>{props.product.content}</p>
                <button className="cart">Add to cart</button>
              </div>
        </Dialog>
    )
}

export default ProductView