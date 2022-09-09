import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./screens/Home"
import Payments from "./screens/Payments"
import Wallet from "./screens/Wallet"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "md-home-sharp" : "md-home-outline"
          } else if (route.name === "Payments") {
            iconName = focused ? "card" : "card-outline"
          } else if (route.name === "Wallet") {
            iconName = focused ? "md-wallet" : "wallet-outline"
          }

          return <Ionicons name={iconName} size={24} color="#0071bb" />
        },
        tabBarActiveTintColor: "#0071BB",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Payments" component={Payments} />
      <Tab.Screen name="Wallet" component={Wallet} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
