import Link from 'next/link';
import React, { useState } from 'react';
import Select from "react-select";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([ Autoplay,EffectFade, Navigation]);
function Banner2() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [desnation, setdesnation] = useState(null);
  const monthOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const destinationOption = [
    { value: "USA", label: "USA" },
    { value: "Egypt", label: "Egypt" },
    { value: "Bali", label: "Bali" },
    { value: "South Africa", label: "South Africa" },
    { value: "Turkey", label: "Turkey" },
   
   
  ];
  const tourTypeOptions = [
    { value: "Honeymoon", label: "Honeymoon" },
    { value: "Family", label: "Family" },
    { value: "Adventure", label: "Adventure" },
    { value: "Wild", label: "Wild" },
    { value: "Nature", label: "Nature" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      textAlign: "left",
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    
    control: (provided) => ({
      ...provided,
      minHeight: 55,
      textAlign: 'left',
      width: "100%",
      maxWidth: "450px",
      marginTop: "3px",
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      
      backgroundColor: "transparent",
      color:"#fff",
      outline: "none",
      boxShadow: "none",
    }),
    
    placeholder: (provided) => ({
      ...provided,
      color: "#FFF",
    }),
    
   
    
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    
  };
    const banner2Slider = {
      slidesPerView: "auto",
      speed: 1200,
      spaceBetween: 15,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      // autoplay: true,
      loop: true,
      roundLengths: true,
    
      navigation: {
        nextEl: '.banner1-prev',
        prevEl: '.banner1-next',
      },
    }
  return (
    <div className="banner-section2"> 
  <Swiper {...banner2Slider} className="swiper banner2-slider">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/slider/home02/image01.png" className="banner-bg11" alt="image" />
        <div className="container">
          <div className="row justify-content-lg-start justify-content-center align-items-center g-4">
            <div className="col-xl-6 col-lg-7 col-md-12 text-lg-start text-center">
              <div className="banner2-content">
                <span>Hot Place</span>
                <h2>Best  &amp; Amazing Traveling in The CITY.</h2>
                <p>Treat yourself with a journey to your inner self.</p>
                <Link href="/destination"><a  className="eg-btn btn-primary2-outline btn--lg">Discover More</a></Link>
              </div> 
            </div>
          </div>
        </div>  
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="assets/images/slider/home02/image02.jpg" className="banner-bg11" alt="image" />
        <div className="container">
          <div className="row justify-content-start align-items-center g-4">
            <div className="col-xl-6 col-lg-7 col-md-12 text-lg-start text-center">
              <div className="banner2-content">
                <span>Hot Place</span>
                <h2>Best  &amp; Amazing Traveling in The CITY.</h2>
                <p>Treat yourself with a journey to your inner self.</p>
                <Link href="/destination"><a  className="eg-btn btn-primary2-outline btn--lg">Discover More</a></Link>
              </div> 
            </div>
          </div>
        </div> 
      </SwiperSlide>
    </div>
    <div className="slider-arrows arrows-style-2 sibling-2 text-center d-lg-flex d-none flex-row justify-content-between align-items-center w-100">
      <div className="banner1-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> 
        <svg width={20} height={12} viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00001 10.573V6L7.00001 1.42701C7.00001 1.25744 6.80224 1.16481 6.67197 1.27336L1 6L6.67197 10.7266C6.80224 10.8352 7.00001 10.7426 7.00001 10.573Z" />
          <path d="M19 6.5C19.2761 6.5 19.5 6.27614 19.5 6C19.5 5.72386 19.2761 5.5 19 5.5V6.5ZM6.67197 10.7266L6.99206 10.3425V10.3425L6.67197 10.7266ZM1 6L0.679909 5.61589L0.218975 6L0.679909 6.38411L1 6ZM6.67197 1.27336L6.35188 0.889252L6.35188 0.889253L6.67197 1.27336ZM19 5.5L7.00001 5.5V6.5L19 6.5V5.5ZM6.50001 6V10.573H7.50001V6H6.50001ZM6.99206 10.3425L1.32009 5.61589L0.679909 6.38411L6.35188 11.1107L6.99206 10.3425ZM1.32009 6.38411L6.99206 1.65747L6.35188 0.889253L0.679909 5.61589L1.32009 6.38411ZM6.50001 1.42701L6.50001 6H7.50001L7.50001 1.42701H6.50001ZM6.99206 1.65747C6.79667 1.82031 6.50001 1.68136 6.50001 1.42701H7.50001C7.50001 0.833523 6.80781 0.509313 6.35188 0.889252L6.99206 1.65747ZM6.50001 10.573C6.50001 10.3186 6.79667 10.1797 6.99206 10.3425L6.35188 11.1107C6.80781 11.4907 7.50001 11.1665 7.50001 10.573H6.50001Z" />
        </svg>    
      </div>
      <div className="banner1-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> 
        <svg width={20} height={12} viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1.42701V6V10.573C13 10.7426 13.1978 10.8352 13.328 10.7266L19 6L13.328 1.27336C13.1978 1.16481 13 1.25744 13 1.42701Z" />
          <path d="M1 5.5C0.723858 5.5 0.5 5.72386 0.5 6C0.5 6.27614 0.723858 6.5 1 6.5V5.5ZM13.328 1.27336L13.0079 1.65747V1.65747L13.328 1.27336ZM19 6L19.3201 6.38411L19.781 6L19.3201 5.61589L19 6ZM13.328 10.7266L13.6481 11.1107L13.6481 11.1107L13.328 10.7266ZM1 6.5H13V5.5H1V6.5ZM13.5 6V1.42701H12.5V6H13.5ZM13.0079 1.65747L18.6799 6.38411L19.3201 5.61589L13.6481 0.889253L13.0079 1.65747ZM18.6799 5.61589L13.0079 10.3425L13.6481 11.1107L19.3201 6.38411L18.6799 5.61589ZM13.5 10.573V6H12.5V10.573H13.5ZM13.0079 10.3425C13.2033 10.1797 13.5 10.3186 13.5 10.573H12.5C12.5 11.1665 13.1922 11.4907 13.6481 11.1107L13.0079 10.3425ZM13.5 1.42701C13.5 1.68136 13.2033 1.82031 13.0079 1.65747L13.6481 0.889253C13.1922 0.509312 12.5 0.833522 12.5 1.42701H13.5Z" />
        </svg>    
      </div>
    </div>
  </Swiper>
  <div className="banner-form-wrapper">  
    <div className="container banner-form-container">
      <div className="row justify-content-lg-end justify-content-center">
        <div className="col-lg-5 col-md-10">
          <div className="banner-form-box">
            <h3>Find Destination</h3>
            <form className="banner-form">
              <div className="search-box-single destination-box">
                <div className="searchbox-icon">
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.65251 16.4916C8.31231 16.029 7.97931 15.5772 7.65891 15.12C6.55731 13.554 5.53851 11.9376 4.71591 10.2042C4.31271 9.35278 3.94191 8.48518 3.76191 7.55818C3.42171 5.81938 3.82491 4.25698 5.00211 2.92678C6.13791 1.64698 7.59231 1.06018 9.29871 1.13038C11.6801 1.22938 13.7591 3.02038 14.2433 5.36218C14.4413 6.32338 14.3765 7.26298 14.0813 8.19898C13.4891 10.0602 12.5621 11.754 11.5019 13.3776C10.7441 14.5368 9.91971 15.6528 9.12411 16.7868C9.10431 16.8138 9.08451 16.839 9.05751 16.8696C9.01791 16.9128 8.83791 16.7436 8.65251 16.4916ZM11.6189 6.55918C11.6891 5.20378 10.5641 3.94018 9.21951 3.86638C7.66791 3.77998 6.46551 4.85998 6.38271 6.42058C6.31071 7.77598 7.46091 9.03418 8.83431 9.09898C10.3445 9.17098 11.5415 8.07658 11.6189 6.55918Z" />
                  </svg>
                </div>
                <div className="searchbox-input">
                <Select
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          padding: 0,
                          textAlign: 'left !importent',
                          colors: {
                            ...theme.colors,
                            primary25: "#f6f6f6",
                            primary: "#90b956",
                          },
                        })}
                        styles={customStyles}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        width="250px"
                        menuColor="#333"
                        defaultValue={desnation}
                        options={destinationOption}
                        placeholder="Select Destination"
                      />
                </div>
              </div>
              <div className="search-box-single">
                <div className="searchbox-icon">
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4973 8.2528C11.5381 8.29344 11.5704 8.34172 11.5924 8.39487C11.6145 8.44802 11.6258 8.505 11.6258 8.56255C11.6258 8.6201 11.6145 8.67708 11.5924 8.73023C11.5704 8.78338 11.5381 8.83166 11.4973 8.8723L8.87231 11.4973C8.83167 11.538 8.7834 11.5704 8.73024 11.5924C8.67709 11.6145 8.62011 11.6258 8.56256 11.6258C8.50502 11.6258 8.44804 11.6145 8.39489 11.5924C8.34173 11.5704 8.29345 11.538 8.25281 11.4973L6.94031 10.1848C6.89964 10.1441 6.86737 10.0958 6.84536 10.0427C6.82334 9.98954 6.81201 9.93258 6.81201 9.87505C6.81201 9.81752 6.82334 9.76056 6.84536 9.70741C6.86737 9.65427 6.89964 9.60598 6.94031 9.5653C7.02247 9.48315 7.13389 9.437 7.25006 9.437C7.30759 9.437 7.36455 9.44833 7.4177 9.47034C7.47085 9.49236 7.51914 9.52462 7.55981 9.5653L8.56256 10.5689L10.8778 8.2528C10.9185 8.21206 10.9667 8.17973 11.0199 8.15768C11.073 8.13562 11.13 8.12427 11.1876 8.12427C11.2451 8.12427 11.3021 8.13562 11.3552 8.15768C11.4084 8.17973 11.4567 8.21206 11.4973 8.2528Z" />
                    <path d="M5.0625 2C5.17853 2 5.28981 2.04609 5.37186 2.12814C5.45391 2.21019 5.5 2.32147 5.5 2.4375V2.875H12.5V2.4375C12.5 2.32147 12.5461 2.21019 12.6281 2.12814C12.7102 2.04609 12.8215 2 12.9375 2C13.0535 2 13.1648 2.04609 13.2469 2.12814C13.3289 2.21019 13.375 2.32147 13.375 2.4375V2.875H14.25C14.7141 2.875 15.1592 3.05937 15.4874 3.38756C15.8156 3.71575 16 4.16087 16 4.625V14.25C16 14.7141 15.8156 15.1592 15.4874 15.4874C15.1592 15.8156 14.7141 16 14.25 16H3.75C3.28587 16 2.84075 15.8156 2.51256 15.4874C2.18437 15.1592 2 14.7141 2 14.25V4.625C2 4.16087 2.18437 3.71575 2.51256 3.38756C2.84075 3.05937 3.28587 2.875 3.75 2.875H4.625V2.4375C4.625 2.32147 4.67109 2.21019 4.75314 2.12814C4.83519 2.04609 4.94647 2 5.0625 2V2ZM2.875 5.5V14.25C2.875 14.4821 2.96719 14.7046 3.13128 14.8687C3.29538 15.0328 3.51794 15.125 3.75 15.125H14.25C14.4821 15.125 14.7046 15.0328 14.8687 14.8687C15.0328 14.7046 15.125 14.4821 15.125 14.25V5.5H2.875Z" />
                  </svg>
                </div>
                <div className="searchbox-input">
                <Select
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                            primary: "#90b956",
                          },
                        })}
                        styles={customStyles}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        width="250px"
                        height="20px"
                        menuColor="#333"
                        
                        padding="5px"
                        defaultValue={selectedOption2}
                        options={monthOptions}
                        placeholder="Month"
                      />
                </div>
              </div>
              <div className="search-box-single">
                <div className="searchbox-icon">
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2047 7.64637C14.8717 7.64277 14.5405 7.62657 14.2093 7.65177C13.9807 7.66797 13.8511 7.57077 13.7377 7.39437C13.3489 6.79317 12.9421 6.20277 12.5641 5.59437C12.3355 5.22537 12.0133 5.05617 11.5993 5.01837C11.5165 5.01117 11.4355 4.99137 11.3527 4.98597C11.0215 4.96077 10.6975 4.84917 10.3645 4.89057C9.44468 5.00397 8.52848 5.12637 7.61049 5.25597C7.27748 5.30277 7.04169 5.49177 6.93548 5.81757C6.73928 6.41697 6.54309 7.01997 6.35769 7.62297C6.31629 7.75617 6.26409 7.89117 6.29469 8.04057C6.36489 8.37357 6.69969 8.70297 6.99309 8.71917C7.42869 8.74437 7.73829 8.53917 7.86969 8.13417L8.26569 6.93357C8.29089 6.85617 8.30709 6.77877 8.41869 6.76977C8.62749 6.74997 8.83809 6.71757 9.04328 6.68157C9.21969 6.64917 9.24309 6.70137 9.19989 6.87057C8.95689 7.79937 8.72649 8.73177 8.48889 9.66237C8.28369 10.467 8.47269 10.9674 9.15489 11.4336C9.95409 11.9772 10.7497 12.5226 11.5489 13.0626C11.6767 13.149 11.7433 13.2444 11.7685 13.4028C11.9125 14.3172 12.0655 15.2298 12.2221 16.1424C12.3031 16.6158 12.7243 16.938 13.1599 16.8678C13.6459 16.7922 13.9519 16.3584 13.8709 15.8598C13.6909 14.7762 13.5073 13.6926 13.3255 12.609C13.2805 12.3498 13.1419 12.1518 12.9313 12.0006C12.3913 11.6154 11.8567 11.2212 11.3095 10.8468C11.1547 10.7406 11.1349 10.638 11.1709 10.4742C11.3671 9.58677 11.5561 8.69757 11.7487 7.80837C11.7721 7.70037 11.8009 7.59597 11.8423 7.42317C12.1393 7.87857 12.4165 8.27457 12.6631 8.69037C12.8755 9.05037 13.1491 9.27177 13.5865 9.26457C14.1229 9.25557 14.6575 9.26457 15.1939 9.26097C15.6889 9.25737 16.0507 8.91537 16.0525 8.45817C16.0561 7.99737 15.6943 7.65177 15.2047 7.64637ZM6.49628 9.22137C6.27309 9.24117 6.17229 9.39057 6.11829 9.58317C5.99768 10.026 5.86989 10.4652 5.76189 10.9116C5.72049 11.0862 5.65209 11.0952 5.49369 11.0574C5.04729 10.953 4.61709 10.7856 4.27869 10.764C3.52629 10.7658 2.98089 11.1618 2.80989 11.7756C2.52009 12.8178 2.24289 13.8636 1.96929 14.9112C1.86129 15.3216 2.08989 15.705 2.50209 15.822C2.77569 15.8994 3.05469 15.9624 3.33009 16.0398C3.45609 16.074 3.49749 16.0434 3.51189 15.9066C3.61269 14.9706 4.54329 14.4 5.42349 14.7366C5.56388 14.7906 5.61069 14.7852 5.65029 14.6268C5.79609 14.0274 5.95989 13.4352 6.11829 12.8394C6.39009 11.808 6.66189 10.7748 6.93009 9.74337C7.00928 9.43377 6.80589 9.19437 6.49628 9.22137ZM11.7181 4.36857C12.6037 4.37397 13.3399 3.63057 13.3381 2.73777C13.3345 1.85757 12.6019 1.12497 11.7217 1.12317C10.8361 1.12137 10.0909 1.85037 10.0909 2.71977C10.0927 3.63777 10.8073 4.36497 11.7181 4.36857ZM9.33309 12.2994C8.89389 11.9898 8.38989 11.7522 8.07669 11.2176C7.66269 12.7926 7.26309 14.3118 6.86169 15.8328C6.82929 15.9606 6.81849 16.083 6.85269 16.2108C6.95529 16.6086 7.27748 16.8714 7.66629 16.8714C8.05689 16.8714 8.37188 16.614 8.48528 16.1874L9.44108 12.5892C9.47709 12.4596 9.45369 12.384 9.33309 12.2994ZM4.93029 15.2568C4.49109 15.2514 4.11849 15.6168 4.11309 16.0542C4.10769 16.4952 4.46949 16.866 4.91049 16.8714C5.34788 16.8786 5.72229 16.5132 5.72769 16.074C5.73489 15.6348 5.36949 15.2604 4.93029 15.2568Z" />
                  </svg>
                </div>
                <div className="searchbox-input">
                <Select
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          padding: 0,
                          colors: {
                            ...theme.colors,
                            primary25: "#f6f6f6",
                            primary: "#90b956",
                          },
                        })}
                        styles={customStyles}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        width="250px"
                        menuColor="#333"
                        defaultValue={selectedOption}
                        options={tourTypeOptions}
                        placeholder="Type"
                      />
                </div>
              </div>
              <button className="eg-btn btn--primary2 btn--lg w-100">Find Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner2