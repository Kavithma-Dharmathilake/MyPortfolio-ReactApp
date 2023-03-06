const contactMe = () => {
    return (
        <div className="contact-me bgstyle ">
            <div className="left-col" id="contact"><br />
                <h2 className="title is-3 has-text-white">Contact Me</h2>
                <div className="hl"></div>
            </div>
            <div className="columns ">
                <div className="column is-half left-col">
                    <div className="vl pl-5 contM">
                        <h3 className="title is-size-4 has-text-white has-text-weight-bold pl-3 pt-3">No 122/13, Helvishiya, Dankotuwa</h3>
                        <h3 className="title is-size-4 has-text-white has-text-weight-bold pl-3">Contact@kavi.me</h3>
                        <h3 className="title is-size-4 has-text-white has-text-weight-bold pl-3">0708941234</h3>
                    </div>
                </div>

                <div className="column is-half ">


                    <h1 className="is-size-2">Say Hi to Me </h1><br />
                    <i className="fa-brands fa-facebook is-size-3"></i>
                    <i className="fa-brands fa-twitter is-size-3 ml-5"></i>
                    <i className="fa-brands fa-youtube is-size-3 ml-5"></i>
                    <i className="fa-brands fa-instagram is-size-3 ml-5"></i>


                </div>

            </div>



        </div>
    );
}

export default contactMe;