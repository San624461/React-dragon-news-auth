import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                //navigate after login
                navigate(location?.state ? location.state : '/')
            })

            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>

            <form
                onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="text-3xl my-10 text-center">  Please Login</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Do not Have An Account <Link to='/register' className="text-red-500 font-bold">Register</Link></p>


        </div>
    );
};

export default Login;