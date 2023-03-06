import pic from "./Images/sign.jpg";
const NavBar = () => {
    return (
        <nav className="navbar is-black bgstyle" role="navigation" aria-label="main navigation">
            <div className="mt-4">
                <img className="sign-img" src={pic} alt="sign" />
            </div>
            <div id="navbarBasicExample" class="navbar-menu ">
                <div class="navbar-start ">
                    <a class="navbar-item has-text-warning ml-4	has-text-weight-bold " href="#about">
                        About me
                    </a>

                    <a class="navbar-item has-text-warning ml-4 has-text-weight-bold" href="#education">
                        Education
                    </a>

                    <a class="navbar-item has-text-warning ml-4 has-text-weight-bold" href="#pr-A">
                        Project/Awards
                    </a>

                    <a class="navbar-item has-text-warning ml-4 has-text-weight-bold" href="#contact" >
                        Contact me
                    </a>
                </div>
            </div>
            <br /><br /><br />  <br /><br /><br />
        </nav>

    );

}

export default NavBar;