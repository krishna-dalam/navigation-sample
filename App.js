import * as React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Details")}>
        <Text style={styles.button}>Go to Details</Text>
      </TouchableHighlight>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <TouchableHighlight onPress={() => navigation.push("Details")}>
        <Text style={styles.button}>Go to Details... again</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <Text style={styles.button}>Go to Home</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <Text style={styles.button}>Go back</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.popToTop()}>
        <Text style={styles.button}>Go back to first screen in stack</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0086b3",
    borderRadius: 10,
    alignContent: "center",
    padding: 10,
    color: "#fff"
  }
});

export default App;
