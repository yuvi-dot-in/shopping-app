import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/HomeScreen";
const navigator = createStackNavigator(
  {
    Home: SearchScreen,
  },
  {
    initialRouteName: "Home",

    defaultNavigationOptions: {
      title: "Shopping App",
    },
  }
);

export default createAppContainer(navigator);