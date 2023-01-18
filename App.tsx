import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { GradientProvider } from './src/context/GradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App;

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}