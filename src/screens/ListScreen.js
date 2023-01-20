import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: '45'},
    { name: 'Friend #2', age: '36'},
    { name: 'Friend #3', age: '17'},
    { name: 'Friend #4', age: '50'},
    { name: 'Friend #5', age: '48'},
    { name: 'Friend #6', age: '25'},
    { name: 'Friend #7', age: '67'},
    { name: 'Friend #8', age: '22'},
    { name: 'Friend #9', age: '31'},
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;