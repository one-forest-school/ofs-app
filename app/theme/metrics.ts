import { Dimensions } from 'react-native';

const { width , height} = Dimensions.get('window');

interface MetricsInterface {
    screenWidth : number,
    screenHeight : number
}

const metrics: MetricsInterface = {

    screenWidth : width < height ? width : height,
    screenHeight : width < height ? height : width
};

export default metrics;