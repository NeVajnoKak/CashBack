import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import categoryImg from '../../../img/category-img.jpeg'
import { Link } from 'react-router-dom';

type Props = {}

const Section = (props: Props) => {
  return (
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={categoryImg}   alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Продукты</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="shop-list">Подробнее</Link></div>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </div>
        </section>
  )
}

export default Section