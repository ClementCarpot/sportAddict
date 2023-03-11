import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import PropTypes from 'prop-types'

const Layout = (props) => {
    return (
        <>
            <NavBar />
                {props.children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout