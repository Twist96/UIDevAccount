import React from "react";
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/card";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avater source={require("./assets/avatar.jpg")} />
            <Title>Welcome back</Title>
            <Name>Martinz</Name>
            <NotificationIcon
              style={{ position: "absolute", top: 5, right: 20 }}
            />
          </TitleBar>
          <ScrollView
            style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
            horizontal={true}
          >
            <Logo image={require("./assets/logo-framerx.png")} text="Frame X" />
            <Logo image={require("./assets/logo-figma.png")} text="Figma" />
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              image={require("./assets/background1.jpg")}
              title="Stlyed Components"
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              image={require("./assets/background1.jpg")}
              title="Stlyed Components"
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              image={require("./assets/background1.jpg")}
              title="Stlyed Components"
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Avater = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
  padding-left: 80px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 16px;
  margin-top: 30px;
  margin-left: 20px;
  text-transform: uppercase;
`;
