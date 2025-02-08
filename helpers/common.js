import { Dimensions } from "react-native";

const {width: devicewidth, height: deviceheight} = Dimensions.get('window');

// function for height percentage
const hp = percentage => {
    return (percentage * deviceheight) / 100;
}

// function for width percentage
const wp = percentage => {
    return (percentage * devicewidth) / 100;
}