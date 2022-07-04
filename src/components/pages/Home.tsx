import React from 'react'
import { Link } from "react-router-dom";

const Home: React.FC = () => {


    return (
        <>
            <h1>Home</h1>
            <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}

export default Home;