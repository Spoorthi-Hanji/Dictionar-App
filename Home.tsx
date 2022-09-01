
import React from 'react'
import {StyleSheet, TextInput, View,Text,Button,ActivityIndicator,Switch} from 'react-native'
import {useState,useEffect} from 'react'
import { Stack } from './App';


const Home: React.FunctionComponent<Stack>=(props)=>  {
  const{navigation} = props;
  const [newWord, setNewWord] = useState('') //in new word word entered is stored
  const [randomWordData, setRandomWordData] = useState<any>([]);
  const [loading , setLoading] = useState(true)
  const url = "https://random-words-api.vercel.app/word";

 
   useEffect(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((json)=> setRandomWordData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
    
   },[])
    return (
      <View >
        
        <TextInput
          placeholder='Enter keyword'
          placeholderTextColor="black"
          onChangeText={(value)=>setNewWord(value)}
          style={styles.textInputStyle}
          ></TextInput>

        <View style={[{ width: "40%", margin: 20, alignItems: 'center',marginLeft:120}]}>
          <Button
        title='Search'
        onPress={() => navigation.navigate('Details', {newWord})}// passing props to next screen
        color="grey"
        disabled={!newWord}
        />

        </View>
        
       
       <View>
        {
          loading ? <ActivityIndicator color="#000000"/>: (
            randomWordData.map((rword)=>(
              <View style={styles.wod}>
                <Text style={styles.heading}>Word of the Day</Text>
                <Text style={styles.content}>Word: {rword.word}</Text>
                <Text style={styles.content}>Definition: {rword.definition}</Text>
              </View>
            ))
          )
        }
       </View>
       
        
        
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    
    textInputStyle: {
      width: '50%',
      height: 40,
      marginLeft:100,
      borderWidth: 2,
      marginTop: 200,
      borderRadius: 20,
      alignItems: 'center',
      borderColor: 'black'
      
    },
    img: {
      height: 750
    },
    content:{
      fontWeight: 'bold',
      color:'black'
    },
    heading:{
      fontSize: 30,
      color:'black'
    },
    wod:{
      alignItems: 'center',
      color:'black'
    }
   
    

    
  });
  export default Home;

  