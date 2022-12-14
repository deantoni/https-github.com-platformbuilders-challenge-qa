import styled from "styled-components/native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ModalSheet, TextInput, Counter } from "../../components";

export default function NameScene() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const onConfirmName = () => {
    navigation.navigate("LOCATION");
  };
  return (
    <Wrapper>
      <Title accessibilityLabel="Cadastro">Cadastro</Title>
      <ModalSheet header={<Counter />} title={`Nome Completo`}>
        <TextInput
          isValid={name.split(" ").length >= 2}
          onChangeText={setName}
          onConfirm={name.split(" ").length >= 2 && onConfirmName}
          autoFocus
          accessibilityLabel="Insira o nome completo"
        />
      </ModalSheet>
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #ded3ef;
`;

const Title = styled.Text`
  padding-horizontal: 5px;
  color: #453773;
  font-size: 30px;
  font-weight: 600;
  z-index: 10;
`;
