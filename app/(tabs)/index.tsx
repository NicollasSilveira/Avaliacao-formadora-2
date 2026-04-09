import { Text, StyleSheet, View } from 'react-native';

export default function Main() {
  return (
    <View>
          <Text style={styles.text}>Mambo</Text>

    </View>

  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
    color: "#ffffff",
  },
});
