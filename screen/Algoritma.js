import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import DATA from "../DATA";
import Slider from "@react-native-community/slider";
import * as Location from "expo-location";

class Algortima extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: -7.482122217484001,
      longitude: 110.22036997992643,
      healtFacilities: [],
      distance: 0,
      selectedFacilities: null,
      searchQuery: "",
    };

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      healtFacilities: DATA,
    });
  }

  getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access location was denied");
      }

      const location = await Location.getCurrentPositionAsync({});
      this.mapRef.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0422,
      });

      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleOnValueDistance = (value) => {
    this.setState({ distance: value.toFixed(0) });
  };

  searchSection = () => {
    const haversineFormula = (lat1, long1, lat2, long2) => {
      const deg2rand = (deg) => {
        return deg * (Math.PI / 180);
      };

      var R = 6371;
      var dlat = deg2rand(lat2 - lat1);
      var dlong = deg2rand(long2 - long1);

      var a =
        Math.sin(dlat / 2) * Math.sin(dlat / 2) +
        Math.cos(deg2rand(lat1)) *
          Math.cos(deg2rand(lat2)) *
          Math.sin(dlong / 2) *
          Math.sin(dlong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;

      return d;
    };

    const handleSearch = () => {
      let filteredFacilities = DATA.filter(
        (f) =>
          f.nama.toLowerCase().includes(this.state.searchQuery.toLowerCase()) &&
          haversineFormula(
            this.state.latitude,
            this.state.longitude,
            f.latitude,
            f.longitude
          ) < this.state.distance
      );

      this.setState({
        healtFacilities: filteredFacilities,
      });
    };
    const handleReset = () => {
      this.setState({ healtFacilities: DATA });
    };
    return (
      <View
        style={styles.inputContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <TextInput
          style={styles.input}
          placeholder="Search"
          ref={(search) => (this.search = search)}
          onChangeText={(text) => {
            this.setState({ searchQuery: text });
          }}
          value={this.state.searchQuery}
        />

        <Text>Maksimal jarak tempuh : {this.state.distance} km</Text>
        <Slider
          style={{ width: "100%", height: 60 }}
          minimumValue={0}
          maximumValue={800}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onValueChange={this.handleOnValueDistance}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Cari Lokasi terdekat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  mapSection = () => {
    return (
      <View style={styles.mapContainer}>
        <MapView
          ref={(ref) => {
            this.mapRef = ref;
          }}
          style={styles.map}
          initialRegion={{
            latitude: -7.482122217484001,
            longitude: 110.22036997992643,
            latitudeDelta: 0.0001,
            longitudeDelta: 0.0001,
          }}
          // onMapReady={() => {
          //   this.getLocation();
          // }}
        >
          {this.state.healtFacilities.map((iFacilities) => {
            return (
              <Marker
                key={iFacilities.no}
                coordinate={{
                  latitude: iFacilities.latitude,
                  longitude: iFacilities.longitude,
                }}
              >
                <Callout style={{ height: 150, width: 150 }}>
                  <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <Text>{iFacilities.nama}</Text>
                    <Image
                      style={{ width: 150, height: 150 }}
                      source={{ uri: iFacilities.img }}
                      onError={(error) =>
                        console.error(
                          "Error loading image:",
                          error.nativeEvent.error
                        )
                      }
                    />
                    <Text></Text>
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </View>
    );
  };

  render() {
    const { myCoordinate, mapReady, distance, searchQuery } = this.state;

    return (
      <View style={styles.container}>
        {this.searchSection()}
        {this.mapSection()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  inputContainer: {
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    flexDirection: "column",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Algortima;
