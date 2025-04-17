/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SelectableText } from '@rob117/react-native-selectable-text';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SelectableText
        menuItems={ ['This Is Custom'] }
        onSelection={ ({ content }) => console.log('Selected text:', content) }
        textComponentProps={ { children: (
          <Text >
            Hello World!
          </Text>
        ) } }
      />
    </SafeAreaView>
  );
}

export default App;
