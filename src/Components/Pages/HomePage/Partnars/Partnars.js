import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partnars = () => {
    const settings = {
        // dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (
        <div className='mx-5 my-5'>
            <h1 className='text-center pt-5 mt-5'>Our Partners</h1>
            <Slider {...settings} className='gx-5 mt-5'>
                    <div className=' text-center h-100'>
                        <img src="https://simmifoundation.org/home/images/our_partners/sri_venkateswara_logo.jpeg" class="card-img-top px-3" alt="..." />Example Name
                    </div>


                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/gargi_logo.jpeg" class="card-img-top px-3" alt="..." />Example Name
                    </div>
                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/amity_logo.png" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/tiss_logo.png" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/igu_logo.png" class="card-img-top px-3" alt=".." />Example Name
                    </div>

                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/lpu_logo.png" class="card-img-top px-3" alt=".." />Example Name
                    </div>
                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/iitbhilai_logo.png" class="card-img-top px-3" alt=".." />Example Name
                    </div>
                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/gargi_logo.jpeg" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className=' text-ter h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/upes_logo.png" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/dyalsingh_logo.jpeg" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className=' text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/our_partners/mca_logo.png" class="card-img-top px-3" alt="..." />Example Name
                    </div>
                    



                </Slider>
            
        </div>
    );
};

export default Partnars;