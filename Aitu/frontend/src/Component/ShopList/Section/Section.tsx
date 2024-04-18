import React from 'react'
import logoSmall from '../../../img/small.jpeg'
import { Link } from 'react-router-dom'
interface Props {

}

const Section = (props: Props) => {
  return (
    <>
    <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-2">
                        <img src={logoSmall} width="100" height="100" alt="" />
                    </div>
                   
                    <div className="col-lg-6">
                        <h2><Link to="/shop-info" className="nav-link">Small</Link></h2>
                        <p className="lead">A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section