import {Container} from "react-bootstrap";

/**
 * Component used for centering other components in browser.
 *
 * @param {*} children all elements (children) to be centered within container.
 * @returns Container component including child components.
 */
const CenterContainer = ({children}) => {
    return <Container>{children}</Container>;
}
export default CenterContainer;
