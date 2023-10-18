import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Admin_navbar = () => {
    return (
        <>
            <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 d-md-none d-sm-none  " style={{ backgroundColor: "#00023D" }}>
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 fs-3 px-3" to="/">Dashboard</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse" style={{ overflow: "auto", backgroundColor: "#00023D" }}>
                        <div className="position-sticky">
                            <h4 className='text-light d-flex justify-content-center mt-3 mb-5 d-none d-sm-none d-md-none d-lg-block'>Dashboard</h4>
                            <ul className="nav flex-column gap-2 mt-5">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link ">
                                        <i className=" link-icon fa fa-home fs-5" data-feather="box"></i>
                                        <span className="link-title ms-2"> Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/admin/product' className="nav-link">
                                        <i className="link-icon bi bi-box-seam fs-5" data-feather="sliders"></i>
                                        <span className="link-title ms-3"> Product</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/customers" className="nav-link">
                                        <i className="link-icon fa fa-user-plus" data-feather="image"></i>
                                        <span className="link-title ms-2">Customers</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/admin/income' className="nav-link">
                                        <i className="link-icon bi bi-cash-coin fs-5" data-feather="sliders"></i>
                                        <span className="link-title ms-3">Income</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/admin/promote' className="nav-link">
                                        <i className="link-icon bi bi-percent fs-5" data-feather="sliders"></i>
                                        <span className="link-title ms-2"> Promote</span>
                                    </NavLink>
                                </li>



                                <li className="nav-item">
                                    <NavLink to="/admin/faqs" className="nav-link">
                                        <i className="link-icon bi bi-question-octagon" data-feather="file"></i>
                                        <span className="link-title ms-2"> Help </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown mt-10" style={{
                            color: "white",
                            backgroundColor: "#2D2D69",
                            borderRadius: "10px"
                        }}>
                            <div> <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2 ms-2 mt-2" />
                                <strong>Evano</strong>
                            </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow"style={{backgroundColor:"#2D2D69"}} >
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul></div>
                            <span style={{ fontWeight: "lighter", fontSize: "0.7rem", marginLeft: "44px" }} className='text-light' >Project Manager</span>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Admin_navbar
