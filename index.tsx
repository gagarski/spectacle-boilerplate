import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import Redbox from "redbox-react";

import Presentation from "./presentation";

const CustomErrorReporter = ({error}: { error: Error }) => <Redbox error={error}/>;


ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
        <Presentation/>
    </AppContainer>,
    document.getElementById("root"),
);

const moduleAny = module as any; // FUCK YOU!

if (moduleAny.hot) {
    moduleAny.hot.accept("./presentation", () => {
        const NextPresentation = require("./presentation").default;
        ReactDOM.render(
            <AppContainer errorReporter={CustomErrorReporter}>
                <NextPresentation/>
            </AppContainer>,
            document.getElementById("root"),
        );
    });
}
