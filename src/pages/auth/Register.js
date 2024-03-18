import React,{useState} from 'react';
import Layout from "../../components/Layout/Layout";

const Register = () => {
  return (
    <Layout title={"Register"}>
        <div className='register'>
            <h1>Register Page</h1>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter Name"/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email Address"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputPhone" placeholder="Enter Phone Number"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter House Address"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register
