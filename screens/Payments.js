import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from "react-native"
import React from "react"
import globals from "../globals"

export default function Payments() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globals.container}>
          <Text style={globals.heading}>Payments</Text>

          {/* 3 Top Buttons */}
          <View style={globals.buttons}>
            <Pressable style={globals.button}>
              <Text style={globals.buttonText}>Send</Text>
            </Pressable>
            <Pressable>
              <Text style={globals.buttonText}>Bills</Text>
            </Pressable>
            <Pressable>
              <Text style={globals.buttonText}>Request</Text>
            </Pressable>
          </View>

          {/* Title and TextInput */}
          <View style={globals.cardsContainer}>
            <View>
              <Text style={globals.heading3}>Send to someone new</Text>
              <TextInput
                style={globals.input}
                placeholder="Name, @username, email, mobile number..."
              />
            </View>

            <View style={styles.card}>
              <Image
                style={globals.bigImage}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2343/2343805.png",
                }}
              />

              <Text style={globals.heading3}>
                Find people to start sending money
              </Text>

              <Pressable>
                <Text style={[globals.sendButtonText, globals.sendButtonDark]}>
                  Get Started
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    elevation: 2,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 32,
  },
})
