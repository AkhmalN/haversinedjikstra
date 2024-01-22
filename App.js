import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import Rumah_Sakit from "./screen/Rumah_Sakit";
import Puskemas from "./screen/Puskemas";
import Lokasi from "./screen/Lokasi";
import Algortima from "./screen/Algoritma";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Fasilitas Pelayanan Kesehatan",
          }}
        />
        <Stack.Screen
          name="Rumah_Sakit"
          component={Rumah_Sakit}
          options={{
            headerTitle: "Daftar Rumah Sakit",
          }}
        />

        <Stack.Screen
          name="Puskesmas"
          component={Puskemas}
          options={{
            headerTitle: "Daftar Puskesmas",
          }}
        />
        <Stack.Screen
          name="Lokasi"
          component={Lokasi}
          options={{
            headerTitle: "Lokasi Menuju Tujuan",
          }}
        />
        <Stack.Screen
          name="Algoritma"
          component={Algortima}
          options={{
            headerTitle: "Lokasi Terdekat",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
