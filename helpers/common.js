import { Dimensions } from "react-native";

const {width: devicewidth, height: deviceheight} = Dimensions.get('window');

// function for height percentage
export const hp = percentage => {
    return (percentage * deviceheight) / 100;
}

// function for width percentage
export const wp = percentage => {
    return (percentage * devicewidth) / 100;
}