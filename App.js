import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [task, setTask] = useState([
    {email: "manar@gmail.com", password: "123456"},
        {email: "adel@gmail.com", password: "123478"},
        {email: "ahmed@gmail.com", password: "987654"}]);
        const [text, setText] = useState();

        const [username, setusername] = useState([]);
        const [password, setpassword] = useState([]);
        const handleuser=(v)=>{
          setusername(v);
        }
        const handlepassword=(v)=>{
          setpassword(v);
        }

        const handlesignin=()=>{
          for(let i=0; i<3;i++){
            if(task[i].email==username&&task[i].password==password){
              setText("sucess");
              break;
              }
               else{
                setText("error");
             }
            }

          }
        





  return (
    <View style={styles.container}>
      <View style={styles.textinput}>
        <Text style={{margin:20}}>username</Text>
        <TextInput  style={styles.text} 
        onChangeText={handleuser}
        value={username}
        />
      </View>
      <View style={styles.textinput}>
        <Text style={{margin:20}}>password</Text>
        <TextInput  style={styles.text1}
         onChangeText={handlepassword}
         value={password}
        />
      </View>
      <View>
        <Button title="sign in" onPress={handlesignin} style={styles.button}/>
        <Text style={styles.t}>{text}</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    flexDirection: "row"
  },
  text:{
    borderWidth:1,
    borderColor:'black',
    width:150,
    margin:20,
  },
  text1:{
    borderWidth:1,
    borderColor:'black',
    width:150,
    margin:20,
    
  },
  t:{
    padding:10,
    fontSize:20
  },
  button:{
    flex:1,
    justifyContent: "center",
    margin:20,borderRadius:45,
  }
});
