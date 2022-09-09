import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from "react-native"
import React from "react"
import globals from "../globals"
import Profile from "../components/Profile"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"

export default function Home() {
  // let [fontsLoaded] = useFonts({
  //   "Product Sans Bold": require("../assets/fonts/PRODUCTSANS-BOLD.TTF"),
  //   "Product Sans Regular": require("../assets/fonts/PRODUCTSANS-REGULAR.TTF"),
  // })

  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#00000035" />
      <ScrollView>
        <View style={globals.container}>
          <Profile />

          <View style={globals.cardsContainer}>
            <View style={globals.card}>
              <Image
                style={globals.image}
                source={{
                  uri: "https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889684-paypal_82515.png",
                }}
              />
              <View>
                <Text style={globals.heading}>$64.43</Text>
                <Text>PlayPal Balance</Text>
              </View>
            </View>

            <View
              style={{
                alignItems: "center",
                elevation: 2,
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
                marginBottom: 32,
              }}
            >
              <View>
                <Text style={globals.heading2}>
                  Personalize payments with new stickers, emojis and more
                </Text>
                <Text>Send money now</Text>
              </View>
            </View>

            <View>
              <Text style={globals.heading2}>Recent Activity</Text>
              <View style={globals.card}>
                <Image
                  style={globals.image}
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889684-paypal_82515.png",
                  }}
                />

                <View style={styles.recentActivity}>
                  <View>
                    <Text style={globals.heading3}>PayPal</Text>
                    <Text style={styles.text}>8 Sep Payment Received</Text>
                  </View>

                  <View>
                    <Text style={globals.greenText}>+$11.52</Text>
                  </View>
                </View>
              </View>

              <View style={globals.card}>
                <Image
                  style={globals.image}
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889684-paypal_82515.png",
                  }}
                />

                <View style={styles.recentActivity}>
                  <View>
                    <Text style={globals.heading3}>PayPal</Text>
                    <Text style={styles.text}>7 Aug Payment Received</Text>
                  </View>

                  <View>
                    <Text style={globals.greenText}>+$17.46</Text>
                  </View>
                </View>
              </View>

              <View style={globals.card}>
                <Image
                  style={globals.image}
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889684-paypal_82515.png",
                  }}
                />

                <View style={styles.recentActivity}>
                  <View>
                    <Text style={globals.heading3}>PayPal</Text>
                    <Text style={styles.text}>4 Apr Payment Received</Text>
                  </View>

                  <View>
                    <Text style={globals.greenText}>+$24.98</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={globals.card}>
              <View>
                <Text style={globals.heading2}>Send Payments</Text>

                <View style={styles.recentActivity}>
                  <Image
                    style={globals.image}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/3814/3814305.png",
                    }}
                  />

                  <View>
                    <Text style={globals.heading3}>Pay From Your Phone</Text>
                    <Text style={globals.text}>For the things you love.</Text>
                  </View>
                </View>

                <Pressable style={globals.sendButton}>
                  <Text style={globals.sendButtonText}>Send now</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  recentActivity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
