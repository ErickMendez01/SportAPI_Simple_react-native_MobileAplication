
import React, { Component } from 'react';
import { ImageBackground,View, Text ,image, TextInput, StyleSheet} from 'react-native';
import {Icon , Button} from 'react-native-elements';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1:"",
      input2:"",
      input3:"",
      resultado:"",
    };
  }
  
  render() {
    const register = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
            _this.setState({resultado:xhttp.responseText});
          }
      };
      xhttp.open("GET", "https://bung-topping.000webhostapp.com/registro.php?name="+this.state.input1+"&email="+this.state.input2+"&password="+this.state.input3, true);
      xhttp.send();
    }
    return (
    
      <View style={styles.fondo}>
       <Text style={styles.titulo}>Bienvenido!</Text>
       <Text style={styles.texto}>Registrate ahora para disfrutar</Text>
       <Text style={styles.texto1}>la ultima información sobre la Formula 1</Text>

       <View style={styles.view1}>
       <Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon}/>
        <TextInput 
          keyboardType = "defaul"
          placeholderTextColor="black"
          placeholder="Nombre"
          onChangeText={input1 => this.setState({input1})}
        /></View>

        <View style={styles.view}>
        <Icon type="mail" name="mail" color="gray" containerStyle={styles.icon}/>
        <TextInput 
          keyboardType = "defaul"
          placeholderTextColor="black"
          placeholder="Correo"
          onChangeText={input2 => this.setState({input2})}
        /></View>

        <View style={styles.view}>
         <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon}/>
         <TextInput 
          keyboardType = "defaul"
          placeholderTextColor="black"
          placeholder="Contraseña"
          onChangeText={input3 => this.setState({input3})}
        /></View>
        <View>
          <Text style={{color:'#ffa100',marginLeft:100,fontSize: 16}}>{this.state.resultado} </Text>
        </View>
        <View style= {styles.btn}>
        <Button buttonStyle={styles.boton}   title="Registrar" onPress={register}> </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  fondo:{
    flex: 1,
     backgroundColor: "black",
  },
  
  view1:{
    flexDirection:'row',
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    marginLeft: 55,
  },
  view:{
    flexDirection:'row',
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 30,
    alignItems: "center",
    marginLeft: 55,
  },
  icon:{
    flex:0.5,
  },

  titulo:{
  marginTop:80,
  fontSize: 30,
  textAlign: 'center',
  color:"white",
  },
  texto:{
  marginTop:10,
  fontSize: 18,
  textAlign: 'center',
  color:"#ffa100"
  },
   texto1:{
  fontSize: 18,
  textAlign: 'center',
  color:"#ffa100"
  },
  boton:{
     backgroundColor: "#ffa100",
     borderRadius: 30,
  },
  btn:{
    backgroundColor: "#ffa100",
    borderRadius: 30,
    width: "50%",
    marginBottom: 20,
    alignItems: "center",
    marginLeft: 95,
    marginTop:10,
  }
});
