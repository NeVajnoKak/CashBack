import React from 'react'
import forteBlue from '../../../img/forte-blue.png'
type Props = {}

const Section = (props: Props) => {
  return (
    <>
    <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h2>Blue</h2>
                        <p className="lead">15 %</p>
                        <p className="mt-0">Условия : покупка больше 5000 тенге</p>
                        <p className="mt-5 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam animi quidem dignissimos dolores ab iste.</p>
        
                    </div>
                    <div className="col-md-2">
                        <img src={forteBlue} className="img-fluid" width="400" height="200" alt=""/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h2>Blue</h2>
                        <p className="lead">15 %</p>
                        <p className="mt-0">Условия : покупка больше 5000 тенге</p>
                        <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam animi quidem dignissimos dolores ab iste.</p>
        
                    </div>
                    <div className="col-md-2">
                        <img src={forteBlue}  className="img-fluid" width="400" height="200" alt=""/>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Section