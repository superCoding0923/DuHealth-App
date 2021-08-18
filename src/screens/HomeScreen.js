import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ImageBackground,
  StyleSheet,
  StatusBar
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import Deck from "../components/Deck";
import Cards from "../components/Cards";
import Buttons from "../components/Buttons";

const data = [
  {
    id: 1,
    title: "CORONAVIRUS CASES",
    number: "207,097,4",
  },
  {
    id: 2,
    title: "TOTAL DEATHS",
    number: "4,370,000",
  },
  {
    id: 3,
    title: "RECOVERED",
    number: "18,710,30",
  },
];

const clearOnboarding = async () => {
  try {
    await AsyncStorage.removeItem("@viewedOnboarding");
  } catch (err) {
    console.log("Error @clearOnboarding: ", err);
  }
};

class HomeScreen extends Component {
  renderCard(item) {
    return (
      <View key={item.id} style={styles.cardContainer}>
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Icon
              name="ios-remove"
              size={40}
              color="#662d91"
              style={{ marginTop: 25 }}
            />
            <Text style={styles.number}>{item.number}</Text>
          </View>
          <View style={{ marginLeft: 150 }}>
            <Icon name="md-options" size={24} color="#FFF" />
            <Text style={styles.textCovid}>COVID-19</Text>
          </View>
        </View>
      </View>
    );
  }

  renderNoMoreCards() {
    return (
      <View title="All Done!">
        <Text style={styles.noCard}>NO MORE CARDS HERE</Text>
        <Button backgroundColor="#03A9F4" title="Get more!" />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c2732" barStyle="light-content" />
        <ImageBackground
          source={require("../assets/images/bac.jpg")}
          style={styles.map}
        >
          <View style={styles.col}>
            <View style={{ width: "50%" }}>
              <Icon name="md-remove" color="#FFF" size={26} />
              <Icon
                name="md-remove"
                color="#FFF"
                size={26}
                style={styles.minusIcon}
              />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                source={require("../assets/images/pro.png")}
                style={styles.avatar}
              />
            </View>
          </View>
          <Text style={styles.textDash}>HEALTH DASHBOARD</Text>

          <View style={styles.colContainer}>
            <Text style={styles.textGlobal}>GLOBAL</Text>
            <Text style={styles.textIndia}>INDIA</Text>
            <View style={styles.reloadContainer}>
                <TouchableOpacity onPress={clearOnboarding}>
                    <Icon name="md-refresh" size={24} color="#662d91" />
                </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <Deck
          data={data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
        <ScrollView
          style={{ marginTop: 170 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <Cards
            icon="md-pulse"
            title="TOTAL CASES"
            bg="#662d91"
            number="356 329"
          />
          <Cards
            icon="ios-git-network"
            title="RECOVERED"
            bg="#FFF"
            number="495 329"
          />
          <Cards
            icon="ios-heart-dislike"
            title="DEATH CASES"
            bg="#FFF"
            number="279 329"
          />
        </ScrollView>
        <View style={{ marginBottom: 34 }}>
          <Buttons name="SYMPTOMATIC   " number="2 875" />
          <Buttons name="ASYMPTOMATIC" number="2 896" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c2732",
  },
  cardContainer:{
    height:150,
    width:320,
    alignSelf:"center",
    backgroundColor:"#6A706E",
    borderRadius:30
    },
  card:{
    height:150,
    width:260,
    paddingTop:20,
    paddingHorizontal:30,
    backgroundColor:'#2b3240',
    borderRadius:30,
    flexDirection:'row'
  },
  title:{
    color:"#6A706E",
    width:100,
    fontSize:12,
    fontWeight:"bold"
  },
  number:{
    color:"#FFF",
    width:100,
    fontSize:22,
    fontWeight:"bold",
    marginTop:-10,
  },
  textCovid:{
    transform:[{ rotate : "-90deg"}],
    color:"#3a4b4f",
    fontSize:14,
    width:90,
    marginLeft:-35,
    fontWeight:'bold',
    marginTop:20
  },
  noCard:{
    marginBottom:10,
    color:'#FFF',
    alignSelf:"center"
  },
  map:{
    height:200,
    paddingTop:25,
    paddingHorizontal:20,
    marginBottom:15
  },
  col:{
    flexDirection:'row'
  },
  minusIcon:{
    marginTop:-20,
    marginLeft:5
  },
  avatarContainer:{
    width:"50%",
    alignItems:'flex-end',
  },
  avatar:{
    width:40,
    height:40,
    borderRadius:20
  },
  textDash:{
    color:"#FFF",
    fontSize:20,
    alignSelf:'center',
    marginTop:15,
    fontWeight:'bold'
  },
  colContainer:{
    flexDirection:"row",
    paddingHorizontal:30,
    marginTop:40,
    alignItems:'center',
  },
  textGlobal:{
    fontWeight:"bold",
    fontSize:16,
    color:"#662d91"
  },
  textIndia:{
    fontWeight:"bold",
    fontSize:16,
    paddingHorizontal:30,
    color:"#6a706e"
  },
  reloadContainer:{
    backgroundColor:"#FFF",
    elevation:2,
    width:40,
    height:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:"center",
    marginLeft:50
  }

});

export default HomeScreen;
