import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  NativeModules,
  NativeEventEmitter,
} from "react-native";
import EasebuzzCheckout from "react-native-easebuzz-kit";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open + App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// npm install $(npm pack /Users/maggie/Downloads/paywitheasebuzz-react-native-lib-master/paywitheasebuzz-react-native-lib/react-native-easebuzz-kit | tail -1)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
