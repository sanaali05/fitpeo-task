"use client"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts'

const Admin_dashboard = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Annually');

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        toggleDropdown(); // Close the dropdown after selecting an option
        //  add logic here to update the chart data based on the selected option.
    };
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 " style={{ backgroundColor: "#F5F6F8" }} >
                <div className="container-fluid ">
                <div className="row d-flex justify-content-between  align-items-center pt-3 pb-2">
                    <div className='col-7'>
                        <h4 className="">Hello Sharukh <i className="bi bi-person-raised-hand"></i> , </h4>
                    </div>  
                    <div className="col-5">
                        <form role="search">
                            <div className='d-flex bg-white'>
                                <button className="btn" type="submit"><i className="bi bi-search"></i></button>
                                <input className="form-control border-0" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                        </form>
                    </div>
                </div>
                </div>
              
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                            <Link to='/admin/brand-info'>
                                <div className="card border-left-primary  h-100 py-2 border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="round-circle d-flex justify-content-center align-items-center " style={{ width: "5rem", height: "5rem", borderRadius: "50%", backgroundColor: "#DAFFEB" }} >
                                                    <i className="bi bi-coin fs-1 text-success"></i>
                                                </div>
                                            </div>
                                            <div className="col-8 lh-1 ps-4">
                                                <p className='text-secondary ms-2' style={{ fontSize: "0.8rem" }}><small>Earning</small></p>
                                                <h5 className='lh-1 ms-2' style={{ fontWeight: "800" }}>$198K </h5>
                                                <h6 className='text-lowercase lh-1 m-0 ' style={{ fontWeight: "600", fontSize: "0.7rem" }}><span className='text-success fw-bold'><i className="bi bi-arrow-up-short"></i>37.8% </span>this month</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                            <Link to='/admin/award'>
                                <div className="card border-left-primary border-0 h-100 py-2">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="round-circle d-flex justify-content-center align-items-center " style={{ width: "5rem", height: "5rem", borderRadius: "50%", backgroundColor: "#E7DBFF" }} >
                                                    <i className="bi bi-journal-text fs-1 text-" style={{ color: "#A301FF" }}></i>
                                                </div>
                                            </div>
                                            <div className="col-8 lh-1 ps-4">
                                                <p className='text-secondary ms-2' style={{ fontSize: "0.8rem" }}><small>Orders</small></p>
                                                <h5 className='lh-1 ms-2' style={{ fontWeight: "800" }}>$2.4K </h5>
                                                <h6 className='text-lowercase lh-1 m-0 ' style={{ fontWeight: "600", fontSize: "0.7rem" }}><span className='fw-bold' style={{ color: "#CB003C" }}><i className="bi bi-arrow-down-short"></i>2% </span>this month </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                            <Link to='/admin/carousel'>
                                <div className="card border-left-primary border-0 h-100 py-2">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="round-circle d-flex justify-content-center align-items-center " style={{ width: "5rem", height: "5rem", borderRadius: "50%", backgroundColor: "#CCF2FF" }} >
                                                    <i className="bi bi-cash-coin fs-1 text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="col-8 lh-1 ps-4">
                                                <p className='text-secondary ms-2' style={{ fontSize: "0.8rem" }}><small>Balance</small></p>
                                                <h5 className='lh-1 ms-2' style={{ fontWeight: "800" }}>$2.4K </h5>
                                                <h6 className='text-lowercase lh-1 m-0 ' style={{ fontWeight: "600", fontSize: "0.7rem" }}><span className='fw-bold' style={{ color: "#CB003C" }}><i className="bi bi-arrow-down-short"></i>2% </span>this month </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                            <Link to='/admin/view-package'>
                                <div className="card border-left-primary border-0 h-100 py-2">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="round-circle d-flex justify-content-center align-items-center " style={{ width: "5rem", height: "5rem", borderRadius: "50%", backgroundColor: "#FEB0D8" }} >
                                                    <i className="bi bi-handbag fs-1 text-danger"></i>
                                                </div>
                                            </div>
                                            <div className="col-8 lh-1 ps-4">
                                                <p className='text-secondary ms-2' style={{ fontSize: "0.8rem" }}><small>Total Sales</small></p>
                                                <h5 className='lh-1 ms-2' style={{ fontWeight: "800" }}>$89K </h5>
                                                <h6 className='text-lowercase lh-1 m-0 ' style={{ fontWeight: "600", fontSize: "0.7rem" }}><span className='text-success fw-bold'><i className="bi bi-arrow-up-short"></i>11% </span>this month </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-xl-8 mt-4 mb-5">
                            <div className="card h-100 border-0">
                                <div className="card-body ">
                                    <div className="custom-toolbar d-flex justify-content-end">
                                        <button
                                            type="button"
                                            className="btn dropdown-toggle m-0 p-0"
                                            onClick={toggleDropdown}
                                            style={{ fontSize: "0.8rem", color: "#9F9F9F" }}
                                        >
                                            {selectedOption}
                                        </button>
                                        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    onClick={() => handleOptionSelect('Annually')}
                                                >
                                                    Annually
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    onClick={() => handleOptionSelect('Quarterly')}
                                                >
                                                    Quarterly
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    onClick={() => handleOptionSelect('Half-Yearly')}
                                                >
                                                    Half-Yearly
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <Chart
                                        type="bar"
                                        height={250}
                                        series={[
                                            {
                                                name: "sales",
                                                data: [321, 123, 432, 332, 232, 321, 123, 432, 332, 232, 323, 442]
                                            }
                                        ]}
                                        options={{
                                            chart: {
                                                toolbar: {
                                                    show: false,
                                                },
                                            },
                                            title: {
                                                text: "Overview",
                                            },
                                            subtitle: {
                                                text: "Monthly Earning",
                                                style: {
                                                    color: "#9F9F9F",
                                                },
                                            },
                                            xaxis: {
                                                categories: ["jan", "feb", "march", "april", "may", "june", "july", "Aug", "sep", "oct", "nov", "dec"]
                                            },
                                            yaxis: {
                                                show: false, // Set show to false to hide the y-axis markers
                                            },
                                            colors: ["#F2EFFF"],
                                            plotOptions: {
                                                bar: {
                                                    columnWidth: '50%', // Adjust the width of the bars as needed
                                                    borderRadius: 8, // Set the border radius to round the corners
                                                    colors: {
                                                        ranges: [{ // Define color ranges
                                                            color: '#5A32EA', // Color to apply when selected
                                                        }],
                                                    },
                                                },
                                            },
                                            dataLabels: {
                                                enabled: false,
                                            },
                                            grid: {
                                                show: false, // Set show to false to hide grid lines behind bars
                                            },
                                        }}
                                    >
                                    </Chart>
                                    <style>
                                        {`.apexcharts-bar-series .apexcharts-series path:hover {  fill: #5A32EA;} `}
                                    </style>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4 mt-4 mb-5">
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <Chart
                                        type="radialBar"
                                        height={280}
                                        series={[65]}
                                        options={{
                                            colors: ["#F33999"],
                                            title: {
                                                text: "Customers",
                                            },
                                            subtitle: {
                                                text: "Customers that buy products",
                                                style: {
                                                    color: "#9F9F9F",
                                                },
                                            },
                                            plotOptions: {
                                                radialBar: {
                                                    hollow: {
                                                        margin: 0,
                                                        size: "70%",
                                                    },
                                                    track: {
                                                        dropShadow: {
                                                            enabled: true,
                                                            top: 2,
                                                            left: 0,
                                                            blur: 4,
                                                            opacity: 0.15
                                                        }
                                                    },
                                                    dataLabels: {
                                                        name: {
                                                            offsetY: -10,
                                                            color: "black",
                                                            fontSize: "13px"
                                                        },
                                                        value: {
                                                            color: "black",
                                                            fontSize: "30px",
                                                            fontWeight: "bold",
                                                            show: true
                                                        }
                                                    }
                                                }
                                            },
                                            fill: {
                                                type: "gradient",
                                                gradient: {
                                                    shade: "dark",
                                                    type: "vertical",
                                                    gradientToColors: ["#5E37EA"],
                                                    stops: [0, 100]
                                                }
                                            },
                                            stroke: {
                                                lineCap: "round"
                                            },
                                            labels: ["Total New Customers"]
                                        }}
                                    >
                                    </Chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Admin_dashboard
