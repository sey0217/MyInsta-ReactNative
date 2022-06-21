import React from "react";
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Button, TextInput } from "react-native-web";

const DATA = new Array(100).fill(1).map((data, i) => i);
const getItemCount = (data) => 100;
const getItem = (data, index) => ({
  id: index,
  title: `title ${index}`,
});
const VirtualizedListComponent = () => {
   const Visible = (num, e)=> {

   }


    return (

    <SafeAreaView>
        <TextInput style={styles.name}/>
        <TextInput style={styles.id}/>
        <TextInput style={styles.password}/>
        <Button name="ADD"></Button>
      <VirtualizedList
        // data={DATA}
        // initialNumToRender={5}
        // renderItem={({ item }) => (
        //   <View style={styles.section}>
        //     <Text onClick={ (e)=>{this.Visible({item.title,e})} } >{item.title}</Text> 
        //     {/* <Text>{item.title}</Text> */}
        //   </View>
        // )}
        // getItemCount={getItemCount}
        // getItem={getItem}
      ></VirtualizedList>
    </SafeAreaView>
  );
};

export default VirtualizedListComponent;
const styles = StyleSheet.create({
  section: { padding: 10 },
});