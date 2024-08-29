import React from 'react'
import '../css/clientsection.css'
import NLG from '../logo/NLG.png'
import siddharth from '../logo/siddharth.png'
import shikhar from '../logo/shikhar.png'
import house from '../logo/house.jpg'
import house_1 from '../logo/house(1).jpg'
import house_2 from '../logo/house(3).jpg'

const ClientSection = () => {
    return (
        <div className='pb-5'>
            <section className='container client-section text-center'>
                <div className='client-heading pt-5 pb-4'>
                    <h1>Clients We've Worked With</h1>
                </div>
                <div className='client-content'>
                   
                    <div class="row">
                        <div class="col">
                            <div className="client-detail ms-4">
                                <div className='client-img'>
                                    <img src={NLG} alt="" className='client-img' />
                                </div>
                                <div className='client-title'>
                                    Insurance Surveyor
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="client-detail ms-4">
                                <div className='client-img'>
                                    <img src={siddharth} alt="" className='client-img' />
                                </div>
                                <div className='client-title'>
                                    Insurance Surveyor
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="client-detail ms-4">
                                <div className='client-img'>
                                    <img src={shikhar} alt="" className='client-img' />
                                </div>
                                <div className='client-title'>
                                    Insurance Surveyor
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="client-detail ms-4">
                                <div className=''>
                                    <img src={house} alt="" className='house-img' />
                                </div>
                                <div className='client-title'>
                                New construction for client Padam Karki, Valam.
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="client-detail ms-4">
                                <div className=''>
                                    <img src={house_1} alt="" className='house-img' />
                                </div>
                                <div className='client-title'>
                                New construction for client Padam Karki, Valam.
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="client-detail ms-4">
                                <div className=''>
                                    <img src={house_2} alt="" className='house-img' />
                                </div>
                                <div className='client-title'>
                                New construction for client Padam Karki, Valam.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ClientSection
