import { Image } from 'react-native';

import logo from '../../assets/logo.png';

export function ImageLogo() {
    return (
        <Image 
            source={logo}
            style={{width: 100, height: 100}}
        />
    );
}