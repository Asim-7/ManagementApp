import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center px-6 py-12 items-center">
      <View className="mx-auto w-full max-w-sm">
        <Image
          className="mx-auto"
          source={{
            uri: "https://driveplanx.nl/build/assets/full-logo-vertical-Dq5lcduf.png",
            resizeMode: "contain",
          }}
          style={{
            width: 310,
            height: 140,
            borderRadius: 20,
          }}
        />
        <Text className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </Text>
      </View>

      <View className="mt-10 mx-auto w-full max-w-sm">
        <View className="space-y-6">
          <View>
            <Text className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </Text>
            <View className="mt-2">
              <TextInput
                id="email"
                name="email"
                keyboardType="email-address"
                autoCompleteType="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email"
              />
            </View>
          </View>

          <View>
            <View className="flex flex-row items-center justify-between">
              <Text className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </Text>
              <View className="text-sm">
                <TouchableOpacity>
                  <Text className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-2">
              <TextInput
                id="password"
                name="password"
                secureTextEntry
                autoCompleteType="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </View>
          </View>

          <View>
            <TouchableOpacity className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
              <Text
                className="text-white text-center"
                onPress={() =>
                  navigation.navigate("Home", { email: "test@gmail.com" })
                }
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <TouchableOpacity>
            <Text className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {" "}
              Start a 14 day free trial
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
