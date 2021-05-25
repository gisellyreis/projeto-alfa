import React from 'react';
import Breadcrumb from './Breadcrumb';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <Breadcrumb></Breadcrumb>
                <main>
                    <div className="container">
                        <h1>Home Page</h1>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;