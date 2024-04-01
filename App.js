import React, { useEffect, useState } from "react";
import MainScreen from "./MainScreen";
import * as Font from "expo-font";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      FarroBold: require("./assets/fonts/FarroBold.ttf"),
      GurajadaRegular: require("./assets/fonts/GurajadaRegular.ttf")
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return fontLoaded && <MainScreen />;
};

export default App;
