import React from 'react'
import {StyleSheet, TextInput, View,Text,Button, TouchableOpacity,Image,ActivityIndicator} from 'react-native'
import {useState, useEffect} from 'react'
import Tts from 'react-native-tts';
import axios from 'axios'
import { Stack } from './App';


const Details: React.FunctionComponent<Stack>=(props)=> {
    const{route} = props;
    const {newWord} = route.params;
    const [loading,setLoading]=useState(true)
    const [wordData, setWordData] = useState<any>([])
    
  
   const getInfo = async ()=>{
    const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`)
    setWordData(result.data)
    setLoading(false)
   }

   useEffect(()=>{
    getInfo()
        },[])

        const speak = () => {
            Tts.speak(newWord);
          };     

    return (
        //style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 5}}  speakerbutton
      
        <View style={styles.container}>

          <View >
          <TouchableOpacity onPress={()=>{
            speak()
          }}
          >
          <Image 
          
          source={require('./images/speakerimg.png')} style = {styles.speakerButton}/>

          </TouchableOpacity>

          </View>
         
            {
            loading ? <ActivityIndicator size="small" color="#0000ff" /> : (
                <View >
                    <Text style={styles.contenth} >Word: {wordData[0]?.word}</Text>
                    <Text style={styles.content}>Definition: {wordData[0]?.meanings[0]?. definitions[0]?.definition}</Text>
                    <Text style={styles.content}>Example: {wordData[0]?.meanings[0]?.definitions[0]?.example}</Text>
                    
                    
            

                </View>
            )
        }
          
        </View>
        
      
    );

}

const styles = StyleSheet.create({
    speakerButton:{
        width: 25,
        height: 25,
        marginLeft: 120
        
    },
    container:{
        padding: 30,
      marginTop: 100,
      borderRadius: 30,
      
    },
    content:{
        fontWeight: 'bold',
        color: 'black'
    },
    contenth:{
        fontSize: 25,
        color: 'black'
        

    }
})

    export default Details;