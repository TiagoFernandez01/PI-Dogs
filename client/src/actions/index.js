import axios from 'axios';
import { GET_DOGS, GET_TEMPERAMENTS, GET_FILTER_TEMPERAMENTS, GET_BREED, ORDER_BY_NAME, ORDER_BY_WEIGHT, DOG_DETAILS,FILTER_DOGS } from './types';

export function getDogs() {
    return async function (dispatch) {
        try {
            var allDogs = await axios.get(`http://localhost:3001/dogs`, {
            });
            return dispatch({
                type: GET_DOGS,
                payload: allDogs.data
            });
        } catch (error) {
            console.log(error)
        }

    }
};

export function getTemperaments() {
    return async function (dispatch) {
        try {

            var json = await axios.get(`http://localhost:3001/temperaments`);
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: json.data,
            });

        }
        catch (error) {
            console.log(error)
        }
    }
};

export function FilterByTemperament(payload) {
    try {
        return {
            type: GET_FILTER_TEMPERAMENTS,
            payload
        }
    } catch (error) {
        console.log(error)
    }

};

export function getBreed(payload) {//dogs by name
    return async function (dispatch) {//Dispatch que podemos usar gracias a la asincronia provista por el middleware thunk
        try {
            var json = await axios.get(`http://localhost:3001/dogs?name=${payload}`)
            return dispatch({
                type: GET_BREED,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function OrderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
};

export function OrderByWeight(payload) {
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
};

export function DogDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs/${id}`, {
            });
            return dispatch({
                type: DOG_DETAILS,
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export function postDog(payload) {
    return async function () {
        const data = await axios.post("http://localhost:3001/dogs", payload);
        return data;
    }
}

export function filterDogs(payload){
    return {
        type:FILTER_DOGS,
        payload
    }
}
