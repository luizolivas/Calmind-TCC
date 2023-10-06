import { Image, Dimensions } from 'react-native';

import logo from '../../assets/icon.png';

export function ImageLogo() {

    const isTablet = Dimensions.get('window').width >= 600;

    return (
        <Image 
            source={logo}
            style={{ width: isTablet ? 130 : 100, height: isTablet ? 130 : 100 }}
        />
    );
}