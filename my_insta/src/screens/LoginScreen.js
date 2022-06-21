import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../store/users";

const LoginScreen = () => {
    const dispath = useDispatch();
    const[user, setUser] = useState({
        userId:"",
        password:"",
    });
    const onChangeTextHandler=(name, value)=>{
        setUser({
            ...user,
            [name]:value,
        });

    };
    const onSubmit =()=>{
        dispath(login(user));
    }
  return (
    <View style={styles.form}>
        <TextInput style={styles.inputBox} placeholder="id" onChangeText={(value)=> onChangeTextHandler("userId", value)} autoCapitalize="none"></TextInput>
        <TextInput style={styles.inputBox} placeholder="password" onChangeText={(value)=> onChangeTextHandler("password", value)} secureTextEntry={true}></TextInput>
        <Button title="login" onPress={onSubmit}></Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});