import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, } from 'react-native'
import { createTheme, lightColors, darkColors, Image, ThemeProvider } from '@rneui/themed'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from './src/components/layout/Header'
import {getNowPlaying, getPopularMovies, getTopRated} from './src/services/api'
import MoviesList from './src/components/lists/MoviesList'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'; // Add this import for Platform
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MoviesScreen from './src/components/screens/MoviesScreen'
import SearchScreen from './src/components/screens/SearchScreen'
import TVShowsScreen from './src/components/screens/TvShowsScreen'
import MoreDetails from './src/components/screens/MoreDetails'

//const Tab = createBottomTabNavigator();
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
})

const App = () => {
  
  getNowPlaying().then((data)=>{
    //console.log('now playing data', data);
  });
  getPopularMovies().then((data)=>{
    //console.log('popular movies data', data);
  });
  getTopRated().then((data)=>{
    //console.log('popular top Rated', data);
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Header title={'Movies App'}/>
  
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Movies" component={MoviesScreen} />
            <Tab.Screen name="MoreDetails" component={MoreDetails}  initialParams={{ id: 42 }} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="TV Shows" component={TVShowsScreen} />
          </Tab.Navigator>
          
        </NavigationContainer>
        
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
  
  
}

export default App 