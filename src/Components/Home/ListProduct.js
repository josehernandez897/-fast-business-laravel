import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { map } from "lodash";
//import AwesomeIcon from "react-native-vector-icons/FontAwesome";
//import { Button } from "react-native-paper";
import { API_URL } from "../../utils/Constants";
import { useNavigation } from '@react-navigation/native';
import { Card, NavBar} from 'galio-framework';
import { Button } from 'galio-framework';
import theme  from "../../theme";
//import Fondo from "../../../assets/bolsa.png"

import { ProgressBar, Colors } from 'react-native-paper';


export default function ListProduct(props) {
    const { productos } = props;
    const navigation = useNavigation();

    const goToProduct = (id) => {
       // console.log("hola, tu id es:", id); 
        navigation.push("product", { idProductos: id });
    };


    return (
        <View >
            {map(productos, (productos) => (
                <TouchableWithoutFeedback
                    key={productos._id}
                    onPress={() => goToProduct(productos._id)}
                >
                    <View style={styles.espacio}>
                        <Card flex
                            borderless
                            style={styles.card}
                            title={productos.nombre}
                            caption="C.Solicitada:MXNS $201546"
                            location="Fast"
                            avatar={`${API_URL}${productos.imagen.url}`}
                            imageStyle={styles.cardImageRadius}
                            imageBlockStyle={{ padding: theme.SIZES.BASE / 1 }}
                            image={`${API_URL}${productos.imagen.url}`}   
                        />                         
                        <View>
                        <Text style={styles.financiador}>Financiado:{productos.cantidad_s}0 %    Patrocinadores:5 </Text>
                        <ProgressBar style={styles.progres}  progress={productos.cantidad_s} color={Colors.red} />
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            ))}
                        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        //margin: -3,     
    },
    progres:{
        borderRadius:8,
        borderColor:"blue"
    },
    financiador:{
        color:"green",
        fontSize:14,
        textAlign:"right",
        fontWeight:"bold"
    },
    espacio:{
        marginBottom: 23,
        backgroundColor:"#ffffff",
    },
    containerProducto: {
        width: "100%",
        padding: 5,
        borderRadius: 10,
    },
    product: {
        //backgroundColor: "",
        backgroundColor: "#DCDCDC",
        padding: 10,
        borderRadius: 6,
    },
    image: {
        height: 170,
        resizeMode: "contain",
        width:350,
        marginBottom:15, 
    },
    name: {
        marginTop: 15,
        fontSize: 18,
        marginBottom: 8,
        padding: 10,
        //textAlign:"center",
        backgroundColor: "#2B53C1",
    },
    btn:{
        marginBottom: 20,
        //padding: 15,
        padding: 8,
        backgroundColor: "#2B53C1",
    },
    textouwu:{
        fontSize:13,
        fontWeight:"bold",
        marginBottom:8,
        //textAlign:"stretch",
        //alignItems="stretch"
    },
    contenedor:{
        backgroundColor:"#C0C0C0",
    },  
});
