/* eslint-disable */

import * as path from "path";
import * as express from "express";
import * as webpack from "webpack";
import config from "./webpack.config";
import {Request, Response} from "express";

var app = express();
var compiler = webpack(config);

var serverPort = parseInt(process.env.PORT || "NaN")  || 3000;

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: config!.output!.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "200.html"));
});

app.listen(serverPort, "localhost", function (err: Error) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
