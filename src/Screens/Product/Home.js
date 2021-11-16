import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import colors from "../../styles/colors";
import { StatusBar, Search, NewProducts } from '../../Components/index.js';
//import StatusBar from "../../Components/Search/StatusBar";
//import Search from '../../Components/Search';
//import NewProducts from "../../Components/Home/NewProducts";
import { Drawer } from 'react-native-paper';


export default function Home() {
    return (
        <>
            <StatusBar backgroundcolor={colors.bgDark} barStyle="light-content" />
            <View>   
                <Search/>
                <View style={styles.title2}>
                    <Drawer.Item
                            style={styles.title}
                            icon="file-table-box-multiple-outline"
                            label="TODOS LOS PROYECTOS " 
                    />
                </View>        
            </View>
            <ScrollView style={styles.container}>
                <NewProducts />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#DEE8DD",
        backgroundColor: "#ffffff",
        padding:2,
        
    },
    title:{
        marginBottom:6,
        padding:1.5,
       //borderRadius:23,
       //color:"#CCD1D1",B1E693
       backgroundColor: '#F9F9F9',
       textDecorationLine:"underline",
    },
    title2:{
        
        //padding:1.5,
       backgroundColor: '#F9F9F9',
       textDecorationLine:"underline",
    },
    
})
