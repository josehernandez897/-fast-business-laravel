import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { getLastProductsApi } from "../../api/product";
import ListProduct from './ListProduct';
import useAuth from "../../hooks/useAuth";
//import { ListProduct } from '../../Components/index';
import { NavBar } from 'galio-framework';



export default function NewProducts() {
    const [productos, setProductos] = useState(null);
    const { auth } = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getLastProductsApi(auth);
           // console.log(response);
            setProductos(response);
        })();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.titulo}> 
            </View>
            {productos && <ListProduct productos={productos} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 5,
        //backgroundColor:"black",
        
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center",
        color:"#ffffff",
        padding:5,
    },
    titulo:{
        backgroundColor: "#4169E1",
        borderRadius:5,
    },
});