import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  // useSelector grabs the data from the state and pulls out what we require (loading, error and products) and displays it in our output bellow.
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  //Fire off the action to get the product data through the reducer down into the state
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  // output
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
