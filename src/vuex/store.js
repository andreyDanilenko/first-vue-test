import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
const URL = "http://localhost:3000/cards";
Vue.use(Vuex)

let store = new Vuex.Store({
    // Наальное состояние
    state: {
        cards: [],
        cart: []
    },
    // Прокидываем полученные данные в начальное состояние
    mutations: {
        SET_CARDS_TO_STATE: (state, cards) => {
            state.cards = cards
        },
        SET_CART: (state, card) => {
            state.cart.push(card)
        }
    },
    // Делаем запрос на сервер 
    actions: {
        async GET_CARDS_FROM_API({ commit }) {
            return axios(URL, {
                method: "GET"
            }).then(cards => {
                commit("SET_CARDS_TO_STATE", cards.data);
                return cards;
            }).catch((error) => {
                console.log('Нет данных');
                return error;
            })
        },
        async ADD_TO_CART({ commit }, card) {
            commit('SET_CART', card)
        }
    },
    getters: {
        CARDS(state) {
            return state.cards;
        },
        CART(state) {
            return state.cart;
        }
    }
})

export default store;