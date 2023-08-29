import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Routes
import { HomeScreen } from './routes/HomeScreen';
import { AnxietyScreen } from './routes/AnxietyScreen';
import { SoundScreen } from './routes/SoundScreen';
import { PodcastScreen } from './routes/PodcastScreen';
import { CalmScreen } from './routes/CalmScreen';
import { SelfcareScreen } from './routes/SelfcareScreen';
import { HelpScreen } from './routes/HelpScreen';
import { TalkScreen } from './routes/TalkScreen';

// Respirations
import { DiafragmaticScreen } from './routes/respirations/DiafragmaticScreen';
import { FireScreenScreen } from './routes/respirations/FireScreen';
import { FourSevenEightScreen } from './routes/respirations/FourSevenEightScreen';
import { PranayamaScreen } from './routes/respirations/PranayamaScreen';

// Respirations Instructions
import { InsFourSevenEightScreen } from './routes/instructions calm/InsFourSevenEightScreen';

// Selfcares
import { Sofrology } from './routes/selfcares/Sofrology';
import { Automassage } from './routes/selfcares/Automassage';
import { Harmonization } from './routes/selfcares/Harmonization';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Anxiety" component={AnxietyScreen} />
        <Stack.Screen name="Sound" component={SoundScreen} />
        <Stack.Screen name="Podcast" component={PodcastScreen} />
        <Stack.Screen name="Calm" component={CalmScreen} />
        <Stack.Screen name="Selfcare" component={SelfcareScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Diafragmatic" component={DiafragmaticScreen} />
        <Stack.Screen name="Fire" component={FireScreenScreen} />
        <Stack.Screen name="FourSevenEight" component={FourSevenEightScreen} />
        <Stack.Screen name="InstructionFourSevenEight" component={InsFourSevenEightScreen} />
        <Stack.Screen name="Pranayama" component={PranayamaScreen} />
        <Stack.Screen name="Talk" component={TalkScreen} />
        <Stack.Screen name="Sofrology" component={Sofrology} />
        <Stack.Screen name="Automassage" component={Automassage} />
        <Stack.Screen name="Harmonization" component={Harmonization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
