// Import React
import * as React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text, Appear, Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";

import createHistory from 'history/createBrowserHistory'

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

const history = createHistory();

export default class Presentation extends React.Component {
    render() {
        let props: any = {
            transition: ["zoom", "slide"],
            transitionDuration: 500,
            theme,
            history
        }; // TODO make a PR to DefinitelyTyped
        return (
            <Deck {...props}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Hello!
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" fit bold>
                        This is a presentation!
                    </Text>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
                    <Heading size={1} textColor="secondary" caps>Never gonna</Heading>
                    <List>
                        <Appear><ListItem>Give you up</ListItem></Appear>
                        <Appear><ListItem>Let you down</ListItem></Appear>
                        <Appear><ListItem>Run around</ListItem></Appear>
                        <Appear><ListItem>Desert you</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
                    <Heading size={1} textColor="secondary" caps>Never gonna</Heading>
                    <List>
                        <Appear><ListItem>Make you cry</ListItem></Appear>
                        <Appear><ListItem>Say goodbye</ListItem></Appear>
                        <Appear><ListItem>Tell a lie</ListItem></Appear>
                        <Appear><ListItem>Hurt you</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
                    <Heading size={1} textColor="secondary" caps>proof</Heading>
                    <iframe className="aligned" width="854" height="480" src="https://www.youtube.com/embed/DLzxrzFCyOs"
                            frameBorder="0" allowFullScreen={true}/>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
                    <Image src={"assets/cat.png"}/>
                </Slide>
            </Deck>
        );
    }
}
