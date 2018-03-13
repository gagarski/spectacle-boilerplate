#!/usr/bin/env bash

case `uname -s` in
    "Linux")
        xdg-open "http://localhost:3000/"
        xdg-open "http://localhost:3000/#?presenter"
        ;;
    "Darwin")
        open -a /Applications/Google\ Chrome.app "http://localhost:3000/"
        open -a /Applications/Google\ Chrome.app "http://localhost:3000/#?presenter"
        ;;
    *)
        echo "I don't know how to start browser on your platform =("
        exit 1
esac