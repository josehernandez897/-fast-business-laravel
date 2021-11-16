import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { size } from "lodash";
import {Button} from "react-native-paper"

export default function Order(props) {
  const { order } = props;

  return (
      <View style={styles.product}>
          <View style={styles.btn}>
            <Text style={styles.name}>
              ¿ {order.pregunta} ?
              </Text>
          </View>
          <View style={styles.info}>
          
            {!order.respuesta ? (
              
              <Button icon="email-alert" style={styles.res}>En espera....</Button>
            ) : size(order) === 0 ? (
                <Text style={styles.informacion}>Respuesta: {order.respuesta}</Text>
            ) : (
                <Text style={styles.informacion}>Respuesta: {order.respuesta}</Text>
            )}
          </View>
          <Text styles={styles.texto}>Fecha:{order.createdAt}</Text>
        </View>
  );
}
const styles = StyleSheet.create({
  info: {
    width: "70%",
    justifyContent: "center",
  },

  informacion:{
    fontSize: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color:"#ffffff",
  },
  res:{
     fontSize: 10,
  },
  product: {
    backgroundColor: "#DCDCDC",
    padding: 20,
    borderRadius: 6,
    marginTop: 20,
    marginLeft:0,
    alignItems:"center",
  },
  enviar:{
    backgroundColor:"#1E90FF",
    marginTop:10,
    alignItems: "center",
    color:"#ffffff"
  },
  btn:{
    width:330,
    height:50,
    backgroundColor:"#1E90FF",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    marginTop:10,
    borderRadius:8,
    //borderWidth:1,
  },
  texto:{
    textAlign:"left",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    
    
  },
  vista:{
    flex:1,
  }
});
