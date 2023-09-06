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
import { DiafragmaticScreen } from './routes/respirations/Diafragmatic/DiafragmaticScreen';
import { FourSevenEightScreen } from './routes/respirations/FourSevenEight/FourSevenEightScreen';
import { PranayamaScreen } from './routes/respirations/Pranayama/PranayamaScreen';

// Respirations Instructions
import { InsFourSevenEightScreen } from './routes/respirations/FourSevenEight/InsFourSevenEightScreen';
import { InfoPranayamaScreen } from './routes/respirations/Pranayama/InfoPranayamaScreen';

// Selfcares
import { Sofrology } from './routes/selfcares/Sofrology/Sofrology';
import { Automassage } from './routes/selfcares/Automassage/Automassage';

// Selfcares Action
import { SofrologyAct } from './routes/selfcares/Sofrology/SofrologyAct';
import { NeckMassage } from './routes/selfcares/Automassage/massages/NeckMassage';
import { TemporaMassage } from './routes/selfcares/Automassage/massages/TemporaMassage';
import { HandMassage } from './routes/selfcares/Automassage/massages/HandMassage';
import { ChestMassage } from './routes/selfcares/Automassage/massages/ChestMassage';
import { HairMassage } from './routes/selfcares/Automassage/massages/HairMassage';

// Fonts
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";

export default function App() {

  // Font
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
      return null
  }

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
        <Stack.Screen name="FourSevenEight" component={FourSevenEightScreen} />
        <Stack.Screen name="InstructionFourSevenEight" component={InsFourSevenEightScreen} />
        <Stack.Screen name="Pranayama" component={PranayamaScreen} />
        <Stack.Screen name="PranayamaInfo" component={InfoPranayamaScreen} />
        <Stack.Screen name="Talk" component={TalkScreen} />
        <Stack.Screen name="Sofrology" component={Sofrology} />
        <Stack.Screen name="Automassage" component={Automassage} />
        <Stack.Screen name="SofrologyAct" component={SofrologyAct} />
        <Stack.Screen name="NeckMassage" component={NeckMassage} />
        <Stack.Screen name="TemporaMassage" component={TemporaMassage} />
        <Stack.Screen name="HandMassage" component={HandMassage} />
        <Stack.Screen name="ChestMassage" component={ChestMassage} />
        <Stack.Screen name="HairMassage" component={HairMassage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
