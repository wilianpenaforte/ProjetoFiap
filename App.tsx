import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { RecoilRoot } from 'recoil';
import LaunchHours from './src/view/LaunchHours';




const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaView>
        <StatusBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <LaunchHours />
          </View>
        </ScrollView>
      </SafeAreaView >
    </RecoilRoot>
  );
};
export default App;
