import pic from "./Images/image.png";
const AboutMe = () => {
    return (

        <div className="bgstyle">
            <br /><br /><br />
            <div className="columns up-col ">
                <div className="column is-7 left-col is-align-self-center">

                    <div className="is-size-4 has-text-white has-text-weight-bold">Hi I'm</div>
                    <div className="is-size-2 has-text-warning has-text-weight-bold top-padding">Kavithma Dharmathilake</div>
                    <div className="is-size-4 has-text-white has-text-weight-bold">Undergraduate | Programmer</div>
                    <div className="is-size-3 has-text-white has-text-weight-bold top-padding">I'm hardwaorking, passionate,
                        reliable, </div>
                    <div className="is-size-3 has-text-white has-text-weight-bold">self-motivated person who likes programming</div>
                    <p className="control top-padding">

                        <button className="button is-warning is-rounded has-text-weight-bold">
                            <p className="has-text-dark is-size-5 ">Contact me</p>
                        </button>

                    </p>

                </div>
                <div className="column is-5 has-text-centered ">

                    <img className="pro-img" src={pic} alt="profile" />

                </div>

            </div>
            <br /><br /><br />  <br /><br /><br />
        </div>

    );
}

export default AboutMe;