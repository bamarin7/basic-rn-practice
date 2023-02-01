import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Increase ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorCounter;