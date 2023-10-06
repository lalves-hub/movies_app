import { StatusBar } from 'expo-status-bar';
import { createTheme, lightColors, darkColors, Image, ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './src/components/layout/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesScreen from './src/components/screens/MoviesScreen';
import SearchScreen from './src/components/screens/SearchScreen';
import TVShowsScreen from './src/components/screens/TvShowsScreen';
import MoreDetails from './src/components/screens/MoreDetails';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios
    })
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios
    })
  },
  mode: 'light'
});

const MoviesTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Movies" component={MoviesScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="TV Shows" component={TVShowsScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Header title={'Movies App'} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Movie"
              component={MoviesTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MoreDetails"
              component={MoreDetails}
              initialParams={{ id: 42 }}
              options={{
                headerBackTitle: 'Back to List',
                headerStyle: {
                  height: 90, // Specifing the desired height for the header didn't work to fix the high header on moredetails page
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
