import {NavBar, CenterContainer} from "../shared/index"

/**
 * NotFound page (component) for displaying a custom message to the user.
 * Instead of showing a generic 404 error.
 *
 * @returns NotFound component
 */
const NotFound = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CenterContainer>
                <h4>Hey you seem lost.</h4>
                <p>This page doesn't exist.</p>
            </CenterContainer>
        </div>
    );
}

export default NotFound;
