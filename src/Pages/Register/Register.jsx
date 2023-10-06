
import { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        //create user 
        createUser(email,password)
        .then(res => {
            console.log(res.user)
        })
        .then(error => {
            console.error(error)
        })


    }
    return (
        <div>

            <Navbar></Navbar>

            <form
                onSubmit={handleSignIn} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="text-3xl my-10 text-center">  Please Register</h2>
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" name="name" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />

                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Already Have An Account  <Link to='/login' className="text-red-500 font-bold">Login</Link></p>


        </div>
    );
};

export default Register;