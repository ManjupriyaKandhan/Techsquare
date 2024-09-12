import React from 'react';
import hero from '../images/hero.jpg';
import news from '../images/news.jpg';
import service from '../images/service.jpg';
import './home.css';


function Home() {
    return (
        <>
            <div className='container main mt-5'>
                <img src={hero} />
                <p className='para'>Leading Recruitment and <br />

                    HR solution firm in India!</p>
            </div>

            <div className='container news mt-5'>
                <div className='row '>
                    <div className='news col-sm'>
                        <img src={news} />
                    </div>

                    <div className='part2 col-sm'>
                        <h2 className='mt-4'>Whatever you're looking for, we've got it.</h2>
                        <p className='mt-4'>Tech Square Consultancy Services is a Leader in Manpower Recruitment Industry, provides End-to-End  Recruitment Solutions for all positions of various Industries ie. IT/ITES, Manufacturing, FMCG, Retail, Hospitals, Hotels and other service sectors.</p>

                        <p className='mt-5'>Tech Square Consultancy Services is backed up by a team of vibrant youngsters full of zest and driven by the urge to succeed and be the best. The Success story of Tech Square Consultancy Service relies on its qualitative approach and industries best practices. It is our dedication and enthusiasm that has helped us achieve so much within a short span of time and have a strong clientele to our credit. We're a custom built firm developed by experienced HR Professionals and experts from various domains.</p>


                    </div>
                </div>

            </div>

            <div className='container news mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4 serv'>
                        <img src={service} />
                    </div>

                    <div className='part3 col-sm-12 col-md-6 col-lg-4 mt-5'>
                        <h3>Industries We Serve</h3>

                        <ul className='item'>
                            <li>IT/ITES </li>
                            <li>Sales</li>
                            <li>Help Desk </li>
                            <li>Customer Service</li>
                            <li>Office Support</li>
                            <li>Clerical & Administrative</li>
                            <li>Banking</li>
                            <li>Construction</li>

                        </ul>


                    </div>
                </div>

            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <ul className='item'>
                            <li>Call Center</li>
                            <li>Accounting</li>
                            <li>Manufacturing </li>
                            <li>Maintenance Tech</li>
                            <li>Engineering Sector</li>
                            <li>Warehouse Sector</li>
                            <li>Banking</li>
                            <li>Hospital</li>

                        </ul>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4'>
                    </div>
                </div>

            </div>

            <p className='copy mt-5'>©2024 by Tech Square Consultancy</p>

            <div className='container'>

            <h4 className='mb-4'>Comments</h4>
            <p>Guest 11.09.24 04:20 PM</p>
            <p>Hai</p>
            <p className='point'>Reply</p>
            <hr />

            
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your comment"></textarea>
            </div>

            <div className='row'>

            <div className='col-sm-12 col-md-6 col-lg-4'>
            <div class='mb-3'>
                        <label class='form-label'>Name</label>
                        <input type='text' class='form-control' placeholder="Name" />
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div class='mb-3'>
                        <label class='form-label'>Email</label>
                        <input type='text' class='form-control' placeholder="Email" />
                    </div>
                </div>
            </div>

            </div>

            <div class="sol mt-5">
               
                <p className='fs-4 text-center'>Tech Square Consultancy Services</p>
                </div>
        </>
    )
}

export default Home