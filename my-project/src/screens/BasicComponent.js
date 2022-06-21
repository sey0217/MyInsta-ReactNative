import { useState } from "react";
import { Image, StyleSheet, Text, ScrollView } from "react-native";
import { TextInput } from "react-native";

const BasicComponent = (props) =>{
    const [name, setName] = useState("");
    return(

        <ScrollView>
            <Image 
                style={styles.img} 
                source={{uri:"https://cdn.pixabay.com/photo/2022/05/17/15/49/flower-7203048_960_720.jpg"}}> 
            </Image>
            <Image 
                style={styles.img} 
                source={{uri:"https://cdn.pixabay.com/photo/2020/07/08/04/07/sea-5382487__480.jpg"}}> 
            </Image>
            <Image 
                style={styles.img} 
                source={{uri:"http://localhost:8000/img/miki.jpg"}}> 
            </Image>
        <Text>hello world</Text>
        <TextInput style={styles.input} onChangeText={(e)=>setName(e)} value={name}/>
        <Text>{name}</Text>
        <Text>{props.title}</Text>
        <Button title="버튼" onPress={()=>setName("name")}></Button>
        </ScrollView>
    )


}
export default BasicComponent;

const styles = StyleSheet.create({
    img:{
        width:1000,
        height:1000
    },
    input:{
        borderBottomColor:"green",
        borderWidth:1,
        width:100,
        padding:5,
    }
})