import React, { Component } from 'react';
import { ImageBackground, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import {Icon, Button} from 'react-native-elements';
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      //La declaracion de variables
      input1:"",
      input2:"",
    };
  }


  render () {
    const image = {uri: 'https://i.pinimg.com/originals/11/b1/b5/11b1b51312f7a3f3773485e56230dc3a.jpg'};
     const entrar = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
            _this.setState({resultado:xhttp.responseText});
          }
      };
      xhttp.open("GET", "https://bung-topping.000webhostapp.com/login.php?email="+this.state.input1+"&pass="+this.state.input2, true);
      xhttp.send();
      if ((this.state.resultado) == "1"){
           this.props.navigation.navigate("Inicio");
         }
    }
    const btnClick1 = () => {
      this.props.navigation.navigate("Registro",{codigo:this.state.input1,codigo1:this.state.input2});
    }
    return(
      <View>
         <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
         <View> 
         <Text style={styles.titulo}>Inicia sesión</Text> 
         </View>
        <View style={styles.view1}>
         <Icon type="mail" name="mail" color="gray" containerStyle={styles.icon}/>
        <TextInput
          style={styles.input1}
          placeholder="Correo"
          keyboardType="email"
          placeholderTextColor="black"
          //secureTextEntry={true}
          onChangeText={input1=>this.setState({input1})}
        ></TextInput>
        </View>
        <View style={styles.view}>
        <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon}/>
        <TextInput
          style={styles.input1}
          placeholder="Contraseña"
          placeholderTextColor="black"
          keyboardType="password"
          secureTextEntry={true}
          onChangeText={input2=>this.setState({input2})}
        ></TextInput>
        </View>
        <View>
        <Text style={styles.texto}>{this.state.resultado}</Text>
       </View> 
        <View style={styles.btn}>
          <Button buttonStyle={styles.boton}   title="Siguiente  " onPress={entrar}></Button>
        </View>
        <View style={styles.btn}>
          <Button buttonStyle={styles.boton} title="Regístrate" onPress={btnClick1}></Button>
        </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({

titulo:{
  fontSize: 50, 
  marginTop: 160,
  textAlign: 'center',
  color:"#ffa100",

},
  texto:{
   color:'#ffa100',
   marginLeft:50,
   justifyContent: "center",
   flexDirection:'row',
   height:40,
  },
  btn:{
    backgroundColor: "#ffa100",
    borderRadius: 30,
    width: "50%",
    marginBottom: 20,
    alignItems: "center",
    marginLeft: 98,
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
  boton:{
     backgroundColor: "#ffa100",
     borderRadius: 30,
  },
  input1:{
    height: 60,
    flex: 1,
    padding: 10,
    marginLeft: 1,
  },
});
