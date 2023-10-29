import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Button,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { Component } from "react";
import MapView from "react-native-maps";

const { height, width } = Dimensions.get("screen");

const parkings = [
  {
    id: 1,
    title: "Parking1",
    price: 50,
    rating: 4.2,
    spots: 200,
    free: 10,
    location: {
      lat: 37.78855,
      lng: -122.4354,
    },
  },
  {
    id: 2,
    title: "Parking2",
    price: 50,
    rating: 4.8,
    spots: 26,
    free: 10,
    location: {
      lat: 37.78835,
      lng: -122.4334,
    },
  },
  {
    id: 3,
    title: "Parking3",
    price: 50,
    rating: 3.2,
    spots: 56,
    free: 10,
    location: {
      lat: 37.78825,
      lng: -122.4324,
    },
  },
];
// const SearchBar = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     onSearch(searchText);
//   };

export default class Map extends Component {
  state = {
    hours: {},
  };

  renderHeader() {
    return (
      <View style={styles.header}>
        {/* <View style={styles.Searchbarcontainer}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="Search" onPress={handleSearch} />
    </View> */}
        <Text>header</Text>
      </View>
    );
  }

  renderParking(item) {
    const { hours } = this.state;
    return (
      <View key={`parking-${item.id}`} style={styles.parking}>
        <View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ fontSize: 20, color: "#4E4E4E" }}>
                {item.title}
              </Text>

              <View style={[styles.statusbar]}>
                <Text style={{ color: "white", fontSize: 12 }}>Open</Text>
              </View>
            </View>
<View style={{borderWidth:1,flexGrow:'none',padding:4, borderColor:'gray',borderRadius:10,}}><Text style={{fontSize:16}}> 05:00 hrs</Text></View>
            <Text style={{ fontSize: 12, color: "gray" }}>
              Available spot:{item.spots}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column ",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "gray" }}>${item.price}</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>{item.rating}</Text>
          </View>

          <TouchableWithoutFeedback>
            <View style={styles.bookbutton}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 22, color: "white" }}>
                  ${item.price}
                </Text>
                <Text style={{ fontSize: 10, color: "white" }}>
                  {item.price}x{hours[item.id]}hrs
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ flex: 0.5, fontSize: 18, color: "white" }}
                ></Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  renderParkings() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        centerContent
        snapToAlignment="center"
        onScroll={(props) => console.log("onScroll", props)}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        //  contentInset={{top: 50, left: 24, bottom: 0, right: 12}}
        style={styles.parkings}
      >
        {parkings.map((parking) => this.renderParking(parking))}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <MapView
          initialRegion={{
            latitude: 21.1458,
            longitude: 79.0882,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ flex: 1, width: 400, heigth: 100 }}
        />
        {this.renderParkings()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 0.5,
    // height:20,
    // alignItems: 'center',
    justifyContent: "center",

    // height:100,
  },
  map: {
    flex: 3,
    // width:400,
    // height:100,
  },
  parkings: {
    flex: 1,
    position: "absolute",
    right: 0,
    left: 0,
paddingTop:12,
borderTopEndRadius:20,
    backgroundColor: "white",
    bottom: 0,
  },
  parking: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderWidth: 1,
    borderColor:'gray',
    marginHorizontal: 35,
    //  marginLeft:40,
    width: 340,
    height: 130,
    // elevation: 50,
  },
  Searchbarcontainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 8,
    margin: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  bookbutton: {
    flex: 1,
    backgroundColor: "#0077F6BD",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    height: 90,
    width: 90,

    flexDirection: "row",
  },
  statusbar: {
    width: 42,
    height: 22,
    borderRadius: 15,
    backgroundColor: "#15B400",

    alignItems: "center",
    justifyContent: "center",
  },
});
