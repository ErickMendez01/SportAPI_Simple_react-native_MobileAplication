import React, { Component } from 'react';
import {ImageBackground, View, Text, FlatList,Image,Item, StyleSheet } from 'react-native';

export default class Tab4 extends Component {
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
    xhttp.open("GET", "https://bung-topping.000webhostapp.com/competiciones.php", true);
    xhttp.send();
  }

  render() {
    return (
      <View style={styles.fondo}>
        <Text style={styles.titulo}>Competiciones</Text>
        <FlatList
          data={this.state.lista}
          renderItem={({ item }) => (
            <View style={styles.textContainer} >
              <Text style={styles.content} >{item.name}</Text>
              <View style={styles.row}>  
              <Text style={styles.content1}>País: </Text>
              <Text style={styles.content2}>{item.location.country}</Text>
              </View>
              <View style={styles.row}>  
              <Text style={styles.content1}>Ciudad: </Text>
              <Text style={styles.content2}>{item.location.city}</Text>
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
   content2: {
    color: 'blue',
  },
   content1: {
    color: 'white',
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