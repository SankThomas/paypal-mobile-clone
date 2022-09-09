import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native"
import React from "react"
import globals from "../globals"

export default function Wallet() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globals.container}>
          <Text style={globals.heading}>Wallet</Text>

          <View style={globals.cardsContainer}>
            <View style={[globals.card, styles.card]}>
              <View style={styles.cardInner}>
                <Image
                  style={globals.image}
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889684-paypal_82515.png",
                  }}
                />
                <Text>PlayPal Balance</Text>
              </View>

              <View>
                <Text style={globals.heading3}>+$11.46</Text>
              </View>
            </View>

            <View style={{ marginBottom: 32 }}>
              <Text style={globals.heading}>+$11.46</Text>
            </View>

            <View style={[globals.card]}>
              <Image
                style={styles.bigImage}
                source={{
                  uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/credit_card.png",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bigImage: {
    width: 273,
    height: 200,
  },
})
