import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/postContext';
import './Post.css';

function Posts() {
  const history = useHistory()
  const { setPostDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  const [product, setProduct] = useState([])
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allpost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProduct(allpost)

    })
  })
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {product.map(data => {
            return (
              <div
                onClick={() => {
                  setPostDetails(data)
                  history.push('/view')

                }}
                className="card"
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={data.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {data.price}</p>
                  <span className="kilometer">{data.category}</span>
                  <p className="name"> {data.name}</p>
                </div>
                <div className="date">
                  <span>{data.createdAt}</span>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
