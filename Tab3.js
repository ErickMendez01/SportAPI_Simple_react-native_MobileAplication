import React, { Component } from 'react';
import { ImageBackground,View, Text, FlatList,Image,Item, StyleSheet,TextInput} from 'react-native';
import {Icon, Button} from 'react-native-elements';
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista:[],
      name:"",
    };
  }

 

  render() {
 const buscar = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var temp = xhttp.responseText;
      var datos = JSON.parse(temp);
      this.setState(prevState => ({ lista: prevState.lista.concat(datos.response) }));
    }
  };
  xhttp.open('GET', 'https://bung-topping.000webhostapp.com/pilotos.php?name='+this.state.name, true);
  xhttp.send();
}
    return (
      <View style={styles.fondo}>
        <Text style={styles.titulo}>Pilotos</Text>
         <View style={styles.view1}>
         <Icon type="search" name="search" color="gray" containerStyle={styles.icon}/>
        <TextInput
          placeholder="Ingresa nombre del piloto"
          keyboardType="defaul"
          placeholderTextColor="black"
          onChangeText={name=>this.setState({name})}
        ></TextInput>
        </View>
        
        <View style={styles.btn}>
        <Button buttonStyle={styles.boton}  title="Buscar" onPress={buscar}> </Button>
        </View>
        <FlatList style={styles.pass}
          data={this.state.lista}
          renderItem={({ item }) => (
            <View style={styles.textContainer} >
              <Text style={styles.content1} >{item.name}</Text>
              <Image source={{ uri: item.image }} style={styles.imagen} />
              <View style={styles.row}>
              <Text style={styles.content}>Nacionalidad: </Text>
              <Text style={styles.res}>{item.nationality}</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.content} >Cumpleaños: </Text>
              <Text style={styles.res}>{item.birthdate}</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.content} >Número: </Text>
              <Text style={styles.res}>{item.number}</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.content} >Campeonatos mundiales: </Text>
              <Text style={styles.res}>{item.world_championships}</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.content} >Grands prix: </Text>
              <Text style={styles.res}> {item.grands_prix_entered}</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.content} >Podios: </Text>
              <Text style={styles.res}>{item.podiums}</Text>
              </View>
               <View style={styles.separator} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fondo:{
    flex: 1,
     backgroundColor: "black",
  },
  imagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 75,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'black',
  },
  textContainer: {
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 28,
    color: '#ffa100',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  content: {
    color: 'white',
  },
  content1: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
  },
  view1:{
    marginTop: 10,
    flexDirection:'row',
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    marginLeft: 55,
  },
  icon:{
 flex:0.5,
  },
  pass:{
     marginTop:10,
  },
  btn:{
    backgroundColor: "#ffa100",
    borderRadius: 30,
    width: "50%",
    marginBottom: 20,
    alignItems: "center",
    marginLeft: 95,
    marginTop:10,
  },
  res:{
    color: 'blue',
  },
  boton:{
     backgroundColor: "#ffa100",
     borderRadius: 30,
  },
  row:{
     flexDirection:'row',
  },
  separator: {
  height: 1,
  backgroundColor: 'gray',
  marginVertical: 5,
}

});
