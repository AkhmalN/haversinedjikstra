import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

//menampilkan tampilan beranda navigasi menu aplikasi
const Home = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25 }}>Selamat Datang</Text>
      <Text>Fasilitas Pelayanan Kesehatan di Magelang</Text>

      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate("Rumah_Sakit")}
      >
        <View style={styles.iconMenu}>
          <Image
            source={require("../assets/rs.png")}
            style={{ width: 60, height: 70 }}
          />
        </View>
        <View style={styles.cardTitle}>
          <Text style={styles.cardTextInd}>Rumah Sakit</Text>
          <Text style={styles.cardTextEng}>Daftar Rumah Sakit</Text>
        </View>
        <View style={styles.iconRight}>
          {/* <Image
              source={require("../assets/icon/Expand_right_stop.png")}
              style={{ width: 20, height: 25 }}
            /> */}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate("Puskesmas")}
      >
        <View style={styles.iconMenu}>
          <Image
            source={require("../assets/ps.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.cardTitle}>
          <Text style={styles.cardTextInd}>Puskesmas</Text>
          <Text style={styles.cardTextEng}>Daftar Puskesmas</Text>
        </View>
        <View style={styles.iconRight}>
          {/* <Image
              source={require("../assets/icon/Expand_right_stop.png")}
              style={{ width: 20, height: 25 }}
            /> */}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => props.navigation.navigate("Algoritma")}
      >
        <View style={styles.iconMenu}>
          <Image
            source={require("../assets/maps.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.cardTitle}>
          <Text style={styles.cardTextInd}>Pencarian Lokasi</Text>
          <Text style={styles.cardTextEng}>
            Pencarian Lokasi Fasilitas Kesehatan
          </Text>
        </View>
        <View style={styles.iconRight}>
          {/* <Image
              source={require("../assets/icon/Expand_right_stop.png")}
              style={{ width: 20, height: 25 }}
            /> */}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    padding: 15,
  },
  nameProfile: {
    color: "#D0E7D2",
  },
  sectionProfile: {
    backgroundColor: "#00BFFF",
  },

  textStyleAtensi: {
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
    height: 100,
    alignItems: "center",
  },
  iconMenu: {
    width: "15%",
    marginRight: 10,
  },
  cardTitle: {
    width: "70%",
    borderRadius: 20,
    padding: 10,
    color: "#D0E7D2",
    marginTop: 10,
    marginBottom: 10,
  },
  iconRight: {
    width: "15%",
  },
  sectionProfile: {
    padding: 10,
    flexDirection: "row",
    height: 100,
  },
  descProfile: {
    marginTop: 20,
    marginLeft: 10,
  },
  nameProfile: {
    width: "100%",
    fontSize: 18,
  },
  professionProfile: {
    fontSize: 13,
  },
  cardTextInd: {
    fontSize: 18,
    color: "#000000",
  },
  cardTextEng: {
    color: "#000000",
  },
});
