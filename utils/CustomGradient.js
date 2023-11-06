import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "../utils/styles";

const CustomGradient = ({ children }) => {
  return (
    <LinearGradient
      colors={['#f5f7f5', '#88db8e']}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};


export default CustomGradient;
