import React, { useContext, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export function CameraScreen({ navigation }) {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);

  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photos = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photos.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      type={CameraType.front}
      ref={(camera) => (cameraRef.current = camera)}
      ratio={"16:9"}
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
}
