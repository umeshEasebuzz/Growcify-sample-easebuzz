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
  const callPaymentGateway = () => {
    var options = {
      access_key:
        '77119d6dbad5c65f9323558e5a6ff4542d7c831b733a95cbc9225f6929ea2c38',
      pay_mode: 'production',
    };

    EasebuzzCheckout.open(options)
      .then(data => {
        //handle the payment success & failed response here
        console.log('Payment Response:');
        console.log(data);
      })
      .catch(error => {
        //handle sdk failure issue here
        console.log('SDK Error:'
);
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Open + App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Click Me"
        onPress={() => {
          callPaymentGateway();
          console.log('hi');
        }}
      />
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
