import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text,TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import colors from "../../styles/colors";
import { getProductApi } from "../../api/product";
import { Appbar , Drawer, Button, IconButton } from "react-native-paper";
import { StatusBar, Search, ScreenLoading} from '../../Components/index';
import useAuth from "../../hooks/useAuth";
import { API_URL } from "../../utils/Constants";
import { useNavigation } from "@react-navigation/native";
import { Card} from 'galio-framework';
//import { Button } from 'galio-framework';
import theme  from "../../theme";



export default function product(props) {
    const { route } = props;
    const { params } = route;
    const { auth } = useAuth();
    //console.log(auth);

    const [productos, setProductos] = useState(null);
    const [imagenes, setImagenes] = useState([]);

    const navigation = useNavigation();
    
     
    useEffect(() => {
        (async () => {
            const response = await getProductApi(params.idProductos, auth);
            //console.log(response);
            setProductos(response);
        })();
    }, []);

    return ( 
          
        <>
            <StatusBar backgroundColor={colors.bgDark} barstyle="light-content"/>
           
            {!productos ? (
                <ScreenLoading color="#79B4B7" text="Cargando la informacion del proyecto..." size="large" />
            ) : (
                <View style={styles.vista}>
                    {/*<ImageBackground source={require('../../../assets/azul.jpg')} resizeMode='cover' style={styles.img}>*/}
    
                      < View style={styles.espacio1}>
                          
                          <Appbar.BackAction onPress={() => navigation.goBack() }/>
                          <Text style={styles.texto_Appbar}>DETALLES DEL PROYECTO</Text>       
                      </View>      
                    <ScrollView >
                        <View style={styles.espacio}>
                                <Card flex
                                borderless
                                style={styles.card}
                                title={productos.nombre}
                            
                                avatar={`${API_URL}${productos.imagen.url}`}
                                imageStyle={styles.cardImageRadius}
                                imageBlockStyle={{ padding: theme.SIZES.BASE / 3}}
                                image={`${API_URL}${productos.imagen.url}`}
                                backgroundColor="#f5f5f5"
                                />      
                            <View style={styles.datos}>
                                <Text style={styles.texto1}>INFORMACION DEL PROYECTO</Text>
                                <Text numberOfLines={1}>               
                                    _________________________________________
                                </Text>
                                <View>
                                    <ScrollView>

                                    <Drawer.Item
                                    style={styles.title2}
                                    icon="tag-text"
                                    label="DESCRIPCIÓN" 
                                    />
                                    <View style={styles.contenedor}> 
                                    <Text style={styles.texto}>{productos.descripcion}</Text>
                                    </View>
                                    <Drawer.Item
                                    style={styles.title2}
                                    icon="folder-text-outline"
                                    label="NOMBRE" 
                                    />   
                                    <View style={styles.contenedor}> 
                                    <Text style={styles.texto}>{productos.nombre}</Text>
                                    </View>
                                    <Drawer.Item
                                    style={styles.title2}
                                    icon="account-group"
                                    label="PROPIETARIOS" 
                                    /> 
                                    <View style={styles.contenedor}>
                                        <Text style={styles.texto} >{productos.emprendedor}</Text>
                                    </View>
                                    <Drawer.Item
                                        style={styles.title2}
                                        icon="domain"
                                        label="NOMBRE DE EMPRESA:" 
                                    />
                                    <View style={styles.contenedor}>
                                        <Text style={styles.texto}>{productos.empresa}</Text> 
                                    </View>
                                    <Drawer.Item
                                        style={styles.title2}
                                        icon="domain"
                                        label="ESTADO DEL PROYECTO:" 
                                    />
                                    <View >
                                        <Text style={styles.texto}>{productos.estatus}</Text> 
                                    </View>  
                                    <TouchableWithoutFeedback>
                                        <View style={styles.addAddresses}>
                                            <Text style={styles.addressesText}>Comentarios</Text>
                                            <IconButton icon="arrow-right" color="#000" size={19} />
                                        </View>
                                    </TouchableWithoutFeedback>                
                                    </ScrollView>
                                </View> 
                            </View>  
                        </View>
                    </ScrollView>
                    < View style={styles.vistantb}>
                          <Button style={styles.btnP}><Text style={styles.textobtnP}>Patrocinar Proyecto </Text> </Button>     
                      </View> 
                    {/*</ImageBackground>*/}
                </View>
                
            )}
        </>

    )
}

const styles = StyleSheet.create({
    vista:{
        flex: 1,
      },
      vistantb:{
          alignContent:"center",
      },
    btnP:{
        backgroundColor:"#1C7947",
        borderRadius:20,
        alignContent:"center",
        padding:5,
        width:350,
        alignItems:"center",
        marginHorizontal:30,
        marginBottom:10,
    },
    textobtnP:{
        color:"#ffffff"
    },

    espacio:{
       //marginBottom: 50,
        backgroundColor:"#EEEEEE",
        borderRadius:6,
        padding:18,
        marginHorizontal:5,
        marginVertical:15,
    },
    espacio1:{
        marginBottom: 1,
         
        backgroundColor:"#79B4B7",
     },
    contenedor:{
        backgroundColor:"#ffffff",
        //borderColor: 'red', borderWidth: 1,borderRadius:5,
       
    },
    caja:{
        backgroundColor:"#ffffff",
        borderColor:"#ffffff",
        paddingBottom:8,
        borderWidth: 1,borderRadius:25,
        
    },
    titulos:{
        //backgroundColor:"#1565C0",
       backgroundColor:"transparent",
       borderColor:"#ffffff",
       borderWidth: 1,borderRadius:15,   
    },
    texto_Appbar:{
        color:"#ffffff",  
       // marginHorizontal:30,
        fontSize:19,
       // marginVertical:1,
        fontWeight:"bold",
        textAlign:"center",
        
    },
    datos:{
        //marginBottom: 50,
         backgroundColor:"#ffffff",
         borderRadius:2,
         padding:20,
         marginVertical:10,
         alignContent:"center",
         
     },
     texto:{
        textAlign:"center",
        textTransform:"uppercase",

     },
     texto1:{
        textAlign:"center",
        fontWeight:"bold"

     },
    img: {
        flex: 1,
        justifyContent: "center"
    },
   
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8,
        padding: 25,
        alignItems:"flex-start",
    },
    title2:{
        marginBottom:5,padding:5,borderRadius:4,backgroundColor: '#F0F6F6',
       //textDecorationLine:"underline",
    },
    addAddresses:{
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor:"#ddd",
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    addressesText:{
        fontSize: 16,
    },
    
});


/*<Button mode="contained" style={styles.titles}> Nombre del Proyeto: </Button>
        <Text style={styles.titleDes}> {productos.nombre} </Text>
        <Button mode="contained" style={styles.titles}>Nombre del emprendedor: </Button>
        <Text style={styles.titleDes}>{productos.emprendedor}</Text>
        <Button mode="contained" style={styles.titles}>Tipo de empresa:</Button>
        <Text style={styles.titleDes}>{productos.empresa}</Text>
        <View style={styles.product}>
            <Image 
                source={{
                    uri: `${API_URL}${productos.imagen.url}`,
                }}
                style={styles.image}
            />
        </View>
        <Button mode="contained" style={styles.titles}>Descripcion del Proyecto:</Button>
        
        <Button mode="contained" style={styles.btn} >Estado: {productos.status}</Button>
            */