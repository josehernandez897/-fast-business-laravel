import React, { useState,useEffect  } from "react";
import { StyleSheet, View, Image ,Platform} from 'react-native';
import { TextInput, Button, Text } from "react-native-paper";
import { useFormik} from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { registerApi} from "../../api/product";
import { formStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

export default function RegisterForm( props) {
    const { changeForm } = props;
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema: Yup.object(validationSchema() ),
        onSubmit: async (formData ) =>{
            setLoading(true);
             try {
                 await registerApi(formData);
                 changeForm();
                // navigation.goBack();
             } catch (error) {
                setLoading(false);
                Toast.show("!Ups¡ algo salio mal...", {
                    position: Toast.positions.CENTER,
                }); 
             }
        }
    });
    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


    return (
        <View>
            
            
            <Text style={styles.texto}>REGISTRO DE PROYECTOS</Text>
           
            <TextInput label="Nombre del Emprendor:"
             style={formStyles.input} 
             onChangeText={(text) => formik.setFieldValue("emprendedor",text)} 
             value={formik.values.emprendedor}
             error={formik.errors.emprendedor}
             />
            <TextInput label="Nombre del Proyecto: " 
            style={formStyles.input}
             onChangeText={(text) => formik.setFieldValue("nombre",text)} 
             value={formik.values.nombre}
             error={formik.errors.nombre}
             //right={<TextInput.Affix text="/10" />}
             />
            <TextInput label="Descripcion del proyecto" 
            style={formStyles.input} //secureTextEntry
             onChangeText={(text) => formik.setFieldValue("descripcion",text)} 
             value={formik.values.descripcion}
             error={formik.errors.descripcion}
             />
            <TextInput label="Nombre de la Empresa:" 
            style={formStyles.input} //secureTextEntry 
            onChangeText={(text) => formik.setFieldValue("empresa",text)} 
            value={formik.values.empresa}
             error={formik.errors.empresa}
            />

            
            
            <Button mode="contained"  onPress={pickImage} >
                seleccionar Imagen
            </Button>

        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          
            
            <Button mode="contained" 
            style={formStyles.btnSucces}
            onPress={formik.handleSubmit}
            loading={loading}>
            Registrar proyecto
            </Button>
 
            <Button mode="text" style={formStyles.btnText} labelStyle={ formStyles.btnTextLabel } onPress={changeForm}>cerrar</Button>
        </View>
    );
}

function initialValues(){
    return{
        emprendedor: "",
        nombre: "",
        descripcion: "",
        empresa:"",
    }
}

function validationSchema(){
    return{
        emprendedor: Yup.string().required(true),
        nombre: Yup.string().required(true),
        descripcion: Yup.string().required(true),
        //empresa: Yup.string().required(true).oneOf([Yup.ref("password")], true),
        empresa: Yup.string().required(true),
    };
}


/**
 * <TextInput label="Imagen:" 
            style={formStyles.input} //secureTextEntry 
            onChangeText={(text) => formik.setFieldValue("Imagen",text)} 
            value={formik.values.Imagen}
             error={formik.errors.Imagen}
            />
 */

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height:95,
        resizeMode:"contain",
        marginBottom:20,
    },
    texto:{
        textAlign:"center",
        marginBottom: 5,
        padding:10,
        fontWeight: "bold",
    },
})