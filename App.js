import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
  const [message, setMessage] = useState("");

  const showAlert = () => {
    Alert.alert(message);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Press me" onPress={showAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
