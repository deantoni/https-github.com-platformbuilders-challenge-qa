import { Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { ModalSheet, Picker } from "../../components";

const dates = [];

const generateDates = () => {
  const hoursNow = new Date().getHours();
  const diff = 4;
  for (let i = hoursNow - diff; i < hoursNow + diff; i++) {
    dates.push({
      label: `${i}:00`,
      value: `${i}:00`,
    });
  }
};

generateDates();

export default function HomeScene() {
  const navigation = useNavigation();
  const hoursNow = new Date().getHours();
  const onConfirmLocation = () => {
    Alert.alert(
      "Compartilhar a localização",
      "Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet.",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => navigation.navigate("HOME") },
      ]
    );
  };
  return (
    <Wrapper>
      <Title>Sowe</Title>
      <ModalSheet
        secondaryButtonText={new Date().toLocaleDateString("pt-BR", {
          dateStyle: "long",
        })}
        onSecondaryButtonPress={onConfirmLocation}
      >
        <Picker horizontal data={dates} selected={`${hoursNow}:00`} />
      </ModalSheet>
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e1f9;
`;

const HeaderWrapper = styled.View``;

const Title = styled.Text`
  padding-horizontal: 25px;
  padding-top: 25px;
  color: #453773;
  font-size: 42px;
  font-weight: 800;
  z-index: 10;
`;
