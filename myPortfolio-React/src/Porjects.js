import contactMe from './contactMe';

const Porjects = () => {
    return (

        <div className="project-awards bgstyle ">
            <div className="left-col" id="pr-A"><br />
                <h2 className="title is-3 has-text-white">Projects/Awards</h2>
                <div className="hl"></div>
            </div>

            <div className="columns ">
                <div className="column is-one-third">
                    <div className="container">

                        <h4 className="is-size-4 has-text-black has-text-weight-bold top-padding pl-5 pb-4">Web App For
                            <br />Vehicle Reservation System</h4>
                        <div className="hl-pr m-2">
                            <div className="is-size-6 has-text-black has-text-centeres has-text-weight-bold pl-3 top-padding">
                                Contribution: Designes and developed the user management UIs and processes</div>
                        </div>

                    </div>

                    <div className="buttonset vehicle-btn ">
                        <button className="button is-warning has-text-weight-bold is-rounded is-medium">HTML/CSS</button>
                        <button
                            className="button is-warning has-text-weight-bold is-rounded ml-3 is-medium">MySQL</button><br />
                        <button className="button is-warning has-text-weight-bold is-rounded mt-3 is-medium">JavaScript</button>
                        <button className="button is-warning has-text-weight-bold is-rounded mt-3 ml-3 is-medium"> PHP </button>
                    </div>
                </div>

                <div className="column is-one-third mt-50">
                    <div className="container">

                        <h4 className="is-size-4 has-text-black has-text-weight-bold top-padding pl-5 pb-4">Web Application For
                            <br />Medicine Ordering system</h4>
                        <div className="hl-pr m-2">
                            <div className="is-size-6 has-text-black has-text-centeres has-text-weight-bold pl-3 top-padding">
                                Contribution: Designes and developed the supplier management UIs and processes</div>
                        </div>
                    </div>

                    <div className="buttonset medi-btn" >
                        <button className="button is-warning has-text-weight-bold is-rounded is-medium ">JAVA</button>
                        <button className="button is-warning has-text-weight-bold is-rounded is-medium ml-3">MySQL</button>
                        <button className="button is-warning has-text-weight-bold is-rounded is-medium ml-3">JSP</button>

                    </div>
                </div>
                <div className="column is-one-third mt-100">
                    <div className="container">

                        <h4 className="is-size-4 has-text-black has-text-weight-bold top-padding pl-5 pb-6">SlIIT Codefest -
                            2020</h4>
                        <div className="hl-pr m-2">
                            <div className="is-size-6 has-text-black has-text-centeres has-text-weight-bold pl-3 top-padding ">
                                Participant</div>
                        </div>
                    </div>

                </div>

            </div>
            <br /><br /><br />  <br /><br /><br />
        </div>


    );
}

export default Porjects;