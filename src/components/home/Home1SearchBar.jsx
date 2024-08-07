import { useRouter } from "next/router";
import React, { useState } from "react";
import Select from "react-select";
function Home1SearchBar({ buttonName = "Fine More" }) {
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
    { value: "Istambul", label: "Istambul" },
    { value: "Dubai", label: "Dubai" },
    { value: "Australia", label: "Australia" },
    { value: "Finland", label: "Finland" },
    { value: "Canada", label: "Canada" }
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
    
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      textAlign: "left",
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-12px",
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),
    
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#09100d",
    }),
  };
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div
      className={
        currentRoute === "/index-adventure"
          ? "searchbar-section sibling-2"
          : "searchbar-section"
      }
    >
      <div className="container">
        <div className="multi-main-search">
          <div className="row align-items-center g-4">
            <div className="col-lg-10">
              <div className="row gx-0 gy-4 align-items-center">
                <div className="col-lg-4 col-md-4">
                  <div className="search-box-single destination-box">
                    <div className="searchbox-icon">
                      <img
                        src="assets/images/icons/form-location.svg"
                        alt="image"
                      />
                    </div>
                    <div className="searchbox-input">
                    <Select
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          padding: 0,
                          colors: {
                            ...theme.colors,
                            primary: "#90b956",
                          },
                        })}
                        styles={customStyles}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        width="300px"
                        menuColor="#333"
                        defaultValue={desnation}
                        options={destinationOption}
                        placeholder="Destination"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="search-box-single">
                    <div className="searchbox-icon">
                      <img src="assets/images/icons/calendar.svg" alt="image" />
                    </div>
                    <div className="searchbox-input">
                    <Select
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          padding: 0,
                          colors: {
                            ...theme.colors,
                            primary: "#90b956",
                          },
                        })}
                        styles={customStyles}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        width="300px"
                        menuColor="#333"
                        defaultValue={desnation}
                        options={destinationOption}
                        placeholder="Destination"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="search-box-single remove-after">
                    <div className="searchbox-icon">
                      <img
                        src="assets/images/icons/travelling.svg"
                        alt="image"
                      />
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
                        width="300px"
                        menuColor="#333"
                        defaultValue={selectedOption}
                        options={tourTypeOptions}
                        placeholder="Type"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-end">
              <div className="main-form-submit w-100">
                <button
                  type="submit"
                  className="eg-btn btn--primary btn--lg w-100"
                >
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1SearchBar;
