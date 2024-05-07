import React, { Component } from 'react';
import {ImageBackground, View, Text, FlatList,Image,Item, StyleSheet } from 'react-native';

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista:[],
    };
  }

  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var temp = xhttp.responseText;
        var datos = JSON.parse(temp);
        this.setState({ lista: datos.response });
      }
    };
    xhttp.open("GET", "https://bung-topping.000webhostapp.com/corredores.php", true);
    xhttp.send();
  }

  render() {
    return (
      <View style={styles.fondo}>
        <Text style={styles.titulo}>Equipos</Text>
        <FlatList
          data={this.state.lista}
          renderItem={({ item }) => (
            <View style={styles.textContainer} >
              <Text style={styles.content} >{item.name}</Text>
               <Image source={{ uri: item.logo }} style={styles.imagen} />
              <View style={styles.row}>
              <Text style={styles.content2}>Centro: </Text>
              <Text style={styles.content1}>{item.base}</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.content2}>presidente: </Text>
              <Text style={styles.content1}>{item.president}</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.content2}>Campeonatos mundiales: </Text>
              <Text style={styles.content1}>{item.world_championships}</Text>
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
  row:{
   flexDirection:'row',
  },
  imagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
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
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
  },
  content1: {
    fontSize: 14,
    lineHeight: 20,
    color: 'blue',
  },
   content2: {
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
  },
  separator: {
  height: 1,
  backgroundColor: 'gray',
  marginVertical: 5,
}
});