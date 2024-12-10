import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors.ts";

export default function _layout() {
  const colorScheme = useColorScheme();
  const schemedColor = Colors[colorScheme ?? "light"];
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: schemedColor.tint,
        tabBarStyle: {
          backgroundColor: schemedColor.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          //   headerShown: false,
          /* nav */
          tabBarColor: schemedColor.background,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
          /* header */
          headerStyle: {
            backgroundColor: schemedColor.background,
          },
          headerTintColor: schemedColor.text,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          /* shared */
          title: "Home",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="add"
        options={{
          //   headerShown: false,
          /* nav */
          tabBarColor: schemedColor.background,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add" size={24} color={color} />
          ),
          /* header */
          headerStyle: {
            backgroundColor: schemedColor.background,
          },
          headerTintColor: schemedColor.text,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          /* shared */
          title: "Add Work",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="portfolio"
        options={{
          //   headerShown: false,
          /* nav */
          tabBarColor: schemedColor.background,
          tabBarIcon: ({ color }) => (
            <Ionicons name="folder-open-outline" size={24} color={color} />
          ),
          /* header */
          headerStyle: {
            backgroundColor: schemedColor.background,
          },
          headerTintColor: schemedColor.text,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          /* shared */
          title: "Portfolio",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}

const styles = StyleSheet.create({});
