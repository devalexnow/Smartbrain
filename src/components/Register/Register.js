import React from "react";

const Register = ({onRouteChange}) => {
    return (
        <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0 white">Register</legend>
                        <div className="mt3">
                            <label className="white db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="br3 white pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100" type="text" name="name"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="white db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="br3 white pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="white db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="br3 white b pa2 input-reset ba bg-transparent hover-bg-navy hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={() => onRouteChange('home')}
                        className="br2 white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register" 
                        />
                    </div>
                </div>
            </main>
        </article>
    );
}

export default Register;