import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
// TODO : add contact thing, resume link

// Styled components can be written many ways. This one is a function with the object return CSS properties
// casing change: flex-direction becomes flexDirection. kebab to camel.

//Basic unstyled header that links to different pages. We can add linked in and resume links here as well.


const HeadingContainer = styled('ul')(() => {
    return {
        display: 'flex',
        listStyle: 'none',
        // You can add a background color here as well
        // I recommend putting all the colors/styles you want into a constants file
        // ie styles.js
        // and export them from there, that way if you want to make any changes
        // you only have to make it in one place
        // backgroundColor: 'newCoolColor'
    };
});

const ListLink = styled('li')(() => {
    return {
        fontStyle: 'bold',
        marginLeft: '20px',
        marginRight: '20px'
    };
})

export const Header = () => {
    return (
            <HeadingContainer>
                <Link to="/">
                    <ListLink>
                        Home
                    </ListLink>
                </Link>
                <Link to="/clock">
                    <ListLink>
                        Clock
                    </ListLink>
                </Link>
                <Link to="/animalcrossingcountdown">
                    <ListLink>
                        Animal Crossing Countdown
                    </ListLink>
                </Link>
                <Link to="/contact">
                    <ListLink>
                        Contact
                    </ListLink>
                </Link>
                {/* No link here, we'll make this a download for your resume */}
                <ListLink>
                    Resume
                </ListLink>
            </HeadingContainer>
    );
};