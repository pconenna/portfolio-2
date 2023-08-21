import React from "react";

function Nav({ currentPage, handlePageChange }){
    return(
        <nav>
            <a href='#about' onClick={() => handlePageChange("About")}> About Me</a>
            <a href="https://github.com/pconenna">Github</a>
            <a href="#my-work" onClick={() => handlePageChange("Work")}>Work</a>
            <a href="#contact-me">Contact Me</a>
        </nav>
    )
}
export default Nav;