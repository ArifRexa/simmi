import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Speakers.css"

const Speakers = () => {
    const settings = {
        // dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (
        <div>
            <h1 className='text-center pt-5 mt-5'>Our Prominent Speakers</h1>
            <div className="px-5 mt-5">
                <Slider {...settings} className='gx-5'>
                    <div className='m-1 text-center h-100'>
                        <img src="https://simmifoundation.org/home/images/speakers/abhimanyu.jpeg" class="card-img-top px-3 " alt="..." />Example Name
                    </div>
                    
                    
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/kevel_kaka.jpg" class="card-img-top px-3 px-3" alt="..." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/rohan_naidu.jpg" class="card-img-top px-3 " alt="." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/major_nithi.jpg" class="card-img-top px-3" alt=".." />Example Name
                    </div>
                    
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/megha_meelu.jpg" class="card-img-top px-3" alt=".." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/vikas_kandola.jpg" class="card-img-top px-3" alt=".." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/sandeep_narwal.jpg" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/naveen_kumar_goyat.jpg" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/sandeep_narwal.jpg" class="card-img-top px-3" alt="." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/amit_hooda.jpg" class="card-img-top px-3" alt="..." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/kevel_kaka.jpg" class="card-img-top px-3" alt="..." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/mohit_chillar.jpg" class="card-img-top px-3" alt=".." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/rohan_naidu.jpg" class="card-img-top px-3" alt="..." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" class="card-img-top px-3" alt=".." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/major_nithi.jpg" class="card-img-top px-3" alt="..." />Example Name
                    </div>
                    <div className='m-1 text-center h-100'>

                        <img src="https://simmifoundation.org/home/images/speakers/abhimanyu.jpeg" class="card-img-top px-3" alt="..." />Example Name
                    </div>



                </Slider>
            </div>
        </div>
    );
};

export default Speakers;