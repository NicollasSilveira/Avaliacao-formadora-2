import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Main() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  function handleCelsius(value) {
    setCelsius(value);

    const num = parseFloat(value);
    if (!isNaN(num)) {
      const f = (num * 9/5) + 32;
      setFahrenheit(f.toFixed(2));
    } else {
      setFahrenheit("");
    }
  }

  function handleFahrenheit(value) {
    setFahrenheit(value);

    const num = parseFloat(value);
    if (!isNaN(num)) {
      const c = (num - 32) * 5/9;
      setCelsius(c.toFixed(2));
    } else {
      setCelsius("");
    }
  }

  return (
    <View style={{ backgroundColor: "#DEA728", paddingBottom: 1920}}>
      <View style={styles.input_bg}>
        <Text>Graus Celsius</Text>
        <TextInput
          style={styles.input_text}
          value={celsius}
          onChangeText={handleCelsius}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.input_bg}>
        <Text>Graus Fahrenheit</Text>
        <TextInput
          style={styles.input_text}
          value={fahrenheit}
          onChangeText={handleFahrenheit}
          keyboardType="numeric"
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
    color: "#ffffff",
  },

  input_bg : {
    backgroundColor: "#EFD59A",
    margin : 50,
    padding: 40,
    borderRadius: 16,
  },
  input_text : {
    padding: 12,
    marginTop: 10,
    borderColor: "#000",
    backgroundColor: "#ffffff",
    borderRadius: 16,
  }
});