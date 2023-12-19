import { Formik } from 'formik';

const Player = () => {
    return (

        <div className="container">
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email: '',
                    country: '',
                    state: '',
                    zip: ''

                }}

                validate={ values => {
                    const errors = {};

                    if(!values.firstname && !values.lastname){
                        errors.firstname = "Player name is mandatory"
                        errors.lastname = "Last name is mandatory"
                    }

                    return errors;

                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <div className="col-md-12 mt-5">
                        <form onSubmit={handleSubmit}>
                            <h4 className="mb-3">Player information</h4>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstname">Player name</label>
                                    <input type="text" 
                                    className="form-control" 
                                    id="firstname" 
                                    name="firstname" 
                                    onChange={handleChange}
                                    value={values.firstname}/>
                                    {errors.firstname ? <span style={{color: "red"}}>{errors.firstname}</span> : null }
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastname">Player Last name</label>
                                    <input type="text" 
                                    className="form-control" 
                                    id="lastname" 
                                    name="lastname" 
                                    onChange={handleChange}
                                    value={values.lastname}/>
                                    {errors.lastname ? <span style={{color: "red"}}>{errors.lastname}</span> : null }
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" value={values.email} />
                            </div>


                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <select className="custom-select d-block w-100" id="country" name="country">
                                        <option value="">Choose...</option>
                                        <option value="US">Aus</option>
                                        <option value="CA">Ind</option>
                                        <option value="NL">Netherlands</option>
                                    </select>

                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">State</label>
                                    <select className="custom-select d-block w-100" id="state" name="state">
                                        <option value="">Choose...</option>
                                        <option value="bangalore">bangalore</option>
                                        <option value="toronto">Toronto</option>
                                        <option value="utrech">Utrech</option>
                                    </select>

                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip" name="zip" />
                                </div>
                            </div>

                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                )}

            </Formik>
        </div>

    );
}

export default Player


