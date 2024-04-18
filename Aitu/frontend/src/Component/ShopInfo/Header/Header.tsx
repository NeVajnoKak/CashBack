import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logoSmall from '../../../img/small.jpeg'
interface Props {

}

const Header = (props: Props) => {
  return (
    <>
        <header className="py-5  head">
            <div className="text-center my-5">
                <img className="img-fluid rounded-circle mb-4" src={logoSmall} width="150" height="150" alt="..." />
                <h1 className="text-white fs-3 fw-bolder">Small</h1>
                <p className="text-white-50 mb-0">Landing Page Template</p>
            </div>
        </header>
    </>
  )
}

export default Header