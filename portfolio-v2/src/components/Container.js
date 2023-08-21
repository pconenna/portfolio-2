import React, { useState } from 'react';
import '../App.css';
import About from './About';
import Work from './Work';
import Nav from './Nav';
function Container(){
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () =>{
        if (currentPage === "About"){
            return <About/>
        }
        if (currentPage === "Work"){
            return <Work/>
        }
        // add more to this after i add more components
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}

export default Container; 