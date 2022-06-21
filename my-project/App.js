
import { SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import BasicComponent from './src/screens/BasicComponent';
import HomeWork from './src/screens/Homework';
import ListComponenet from './src/screens/ListComponent';
import SectionListComponent from './src/screens/SectionListComponent';
import VirtualizedListComponent from './src/screens/VirtualizedListCompoenent';


export default function App() {
  return (
    <SafeAreaView style={[styles.containerMain, styles.row]}>
      {/* <StatusBar style={styles.test} backgroundColor="blue"/>
      <View style={styles.row}>
      <View style={[styles.box, styles.test]}></View>
      <View style={[styles.box, styles.test1]}></View>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.test}>
      <Text>임아연 바보</Text>
    </View> */}
        {/* <View style={style.viewContainer}>
          <BasicComponent title={"title"}></BasicComponent>
        </View>
        <View style={style.viewContainer}>
          <BasicComponent title={"title"}></BasicComponent>
        </View> */}

        <HomeWork></HomeWork>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMain: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  viewContainer:{
    flex: 0.5,
    paddingTop: StatusBar.currentHeight
  },
  test:{
    backgroundColor: 'red',
  },
  test1:{
    backgroundColor: 'blue',
  },
  box:{
    width:100,
    height:100,
  },
  row:{
    flexDirection:'row'
  }

  
});
