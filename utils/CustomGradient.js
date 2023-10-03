import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "../utils/styles";

const CustomGradient = ({ children }) => {
  return (
    <LinearGradient
      colors={['#E8F5E9', '#C8E6C9']}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};


export default CustomGradient;