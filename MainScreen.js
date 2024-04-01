import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import * as Font from "expo-font";

// Font yükleme
const loadFonts = async () => {
  await Font.loadAsync({
    FarroBold: require("./assets/fonts/FarroBold.ttf"),
    GurajadaRegular: require("./assets/fonts/GurajadaRegular.ttf"),
  });
};

const MainScreen = () => {
  const [isPressed, setIsPressed] = useState(false);

  // Fontları yükle
  loadFonts();

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <ImageBackground
      source={require("./assets/orangebg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("./assets/osym.png")} style={styles.logo} />
          <Text style={styles.headerText}>ÖSYM Sistemi</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text style={styles.examTitle}>TUS</Text>
              <Text style={styles.examInfo}>Sınav Saati: 10:00</Text>
              <Text style={styles.examInfo}>
                Sonuç Açıklanma Tarihi: 15 Mart
              </Text>
              <Text style={styles.examInfo}>Başvuru Tarihi: 1-15 Şubat</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.examTitle}>TYT</Text>
              <Text style={styles.examInfo}>Sınav Saati: 09:30</Text>
              <Text style={styles.examInfo}>
                Sonuç Açıklanma Tarihi: 20 Haziran
              </Text>
              <Text style={styles.examInfo}>Başvuru Tarihi: 15-30 Mayıs</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.examTitle}>AYT</Text>
              <Text style={styles.examInfo}>Sınav Saati: 14:00</Text>
              <Text style={styles.examInfo}>
                Sonuç Açıklanma Tarihi: 25 Haziran
              </Text>
              <Text style={styles.examInfo}>Başvuru Tarihi: 15-30 Mayıs</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.examTitle}>MSÜ</Text>
              <Text style={styles.examInfo}>Sınav Saati: 13:00</Text>
              <Text style={styles.examInfo}>
                Sonuç Açıklanma Tarihi: 10 Temmuz
              </Text>
              <Text style={styles.examInfo}>Başvuru Tarihi: 1-15 Haziran</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.examTitle}>YDT</Text>
              <Text style={styles.examInfo}>Sınav Saati: 11:30</Text>
              <Text style={styles.examInfo}>
                Sonuç Açıklanma Tarihi: 1 Ağustos
              </Text>
              <Text style={styles.examInfo}>Başvuru Tarihi: 1-15 Temmuz</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.content}>
          <View style={styles.columnContainer}>
            <TouchableOpacity
              style={[
                styles.categoryContainer,
                isPressed && styles.categoryContainerPressed,
              ]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Text
                style={[
                  styles.categoryText,
                  isPressed && styles.categoryTextPressed,
                ]}
              >
                Başvuru/Tercih Ödemeleri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Duyurular ve Haberler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer}>
              <Text style={styles.categoryText}>ÖSYM Kurumsal</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnContainer}>
            <TouchableOpacity style={styles.categoryContainer}>
              <Text style={styles.categoryText}>ÖSYM Takvimi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Sonuç Belgesi Doğrulama</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.categoryContainer, { marginTop: 25 }]}
            >
              <Text style={styles.categoryText}>e-Devlet ile Kayıt</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footerText}>E-Devlet ile Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.8, 
      },
      
  container: {
    flex: 1,
    backgroundColor: "transparent", 
  },
  header: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 40,
    marginRight: "80%",
    top: "50%",
    borderRadius: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "FarroBold",
  },
  headerText2: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "FarroBold",
  },
  headerText3: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "FarroBold",
  },
  boxContainer: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "orange",
    borderRadius: 20, // Yumuşak kenarlık için border radius artırıldı
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Gölge rengi
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5, // Gölge opaklığı
    shadowRadius: 5, // Gölgenin dağılımı
    elevation: 5, // Android için z-elevasyonu
  },
  
  examTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "FarroBold",
  },
  examInfo: {
    fontSize: 14,
    marginBottom    : 5,
    fontFamily: "GurajadaRegular",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  columnContainer: {
    flex: 1,
    paddingHorizontal: 10,
    
  },
  categoryContainer: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
    bottom: "20%",
    fontFamily: "Roboto",
    borderWidth: 0.5,
    borderColor: "black",
    shadowColor: "#000", // Gölge rengi
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5, // Gölge opaklığı
    shadowRadius: 5, // Gölgenin dağılımı
    elevation: 5, // Android için z-elevasyonu
  },
  
  categoryContainerPressed: {
    backgroundColor: "black",
  },
  categoryText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Roboto",
  },
  categoryTextPressed: {
    color: "black",
  },
  footer: {
    padding: 20,
    backgroundColor: "orange",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 10, // Yaygın stil
    shadowColor: "#000", // Gölge rengi
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Gölge opaklığı
    shadowRadius: 2, // Gölgenin dağılımı
    elevation: 3, // Android için z-elevasyonu
  },
  footerText: {
    fontSize: 18,
    color: "white", // Yazı rengi beyaz olacak
    fontFamily: "Roboto",
  },
  
});

export default MainScreen;

