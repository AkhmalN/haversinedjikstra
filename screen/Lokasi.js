import React, { useState, useEffect, useRef } from "react";
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
} from "react-native";
import MapView, { Polyline } from "react-native-maps";
import * as Location from "expo-location";
import DATA from "../DATA";

//menampilkan maps dan input koordinat lokasi
const Lokasi = () => {
  const [inputCoords, setInputCoords] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [myCoordinate, setMyCoordinate] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(null);
  const [travelTime, setTravelTime] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Mengaktifkan akses GPS
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMyCoordinate(location.coords);
    })();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setDropdownVisible(false);

    setLatitude(location.latitude);
    setLongitude(location.longitude);
  };

  const haversine = (coord1, coord2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(coord2.latitude - coord1.latitude);
    const dLon = deg2rad(coord2.longitude - coord1.longitude);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(coord1.latitude)) *
        Math.cos(deg2rad(coord2.latitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  useEffect(() => {
    if (latitude !== "" && longitude !== "") {
      // Menghitung jarak dengan rumus Haversine
      const dist = haversine(myCoordinate, {
        latitude: latitude,
        longitude: longitude,
      });
      setDistance(dist);

      const averageSpeed = 180; // in km/h
      const travelTimeInHours = dist / averageSpeed;
      const travelTimeInMinutes = travelTimeInHours * 60;

      setTravelTime(travelTimeInMinutes);

      const newPath = [
        { latitude: myCoordinate.latitude, longitude: myCoordinate.longitude },
        { latitude: latitude, longitude: longitude },
      ];
      setPath(newPath);
    }
  }, [latitude, longitude, myCoordinate]);
  const formatTravelTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0 && remainingMinutes > 0) {
      return `${hours} jam ${remainingMinutes.toFixed(0)} menit`;
    } else if (hours > 0) {
      return `${hours} jam`;
    } else {
      return `${remainingMinutes} menit`;
    }
  };
  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      });
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inputContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Text>Koordinate Anda saat ini :</Text>
        <View style={styles.input}>
          <Text>lat : {myCoordinate ? myCoordinate.latitude : ""} </Text>
          <Text>long : {myCoordinate ? myCoordinate.longitude : ""}</Text>
        </View>
        <Text>Lokasi yang akan di tuju :</Text>
        <TouchableOpacity style={styles.input} onPress={toggleDropdown}>
          <Text>
            {selectedLocation
              ? selectedLocation.Nama
              : "Pilih lokasi yang akan dituju"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomIn}>
          <Text>Zoom in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut}>
          <Text>Zoom out</Text>
        </TouchableOpacity>
        {dropdownVisible && (
          <ScrollView>
            {DATA.map((place, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleLocationSelect(place)}
                >
                  <View>
                    <Text>{place.Nama}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}

        <View>
          <Text>Jarak : {distance ? `${distance.toFixed(2)} km` : ""}</Text>
          <Text>
            Waktu Tempuh:{" "}
            {travelTime !== null ? formatTravelTime(travelTime) : ""}
          </Text>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: myCoordinate ? myCoordinate.latitude : -6.39083498394,
            longitude: myCoordinate ? myCoordinate.longitude : 106.390389839,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {path.length > 0 && (
            <Polyline coordinates={path} strokeWidth={2} strokeColor="red" />
          )}
        </MapView>
      </View>
    </View>
  );
};

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
  },
});

export default Lokasi;
