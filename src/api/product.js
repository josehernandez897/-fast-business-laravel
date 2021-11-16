import { API_URL } from "../utils/Constants";
/*
export async function getLastProductsApi(limit = 30) {
    try {
        const url = `${API_URL}/productos?_limit=${limit}&_sort=createAt:DESC`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}*/
export async function getLastProductsApi(auth) {
    try {
        const url = `${API_URL}/productos?user=${auth.idUser}`;
        const params = {
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${auth.token}` 
            },
        }; 
        const response = await fetch(url, params);
        const result = await response.json();
        //console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getProductApi(id, auth) {
    try {
        const url = `${API_URL}/productos/${id}`;
        const params = {
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${auth.token}` 
            },
        }; 
        const response = await fetch(url,params);
        const result = await response.json();
       // console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//agregas esto: es la del registro de pry
export async function registerApi(formData) {
    try {
        const url = `${API_URL}/productos`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        };

        //returnamos el datos
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}