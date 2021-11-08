import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
const URL = "http://localhost:3000/cards?q=";
// http://localhost:3000/cards?q=

Vue.use(Vuex)

let store = new Vuex.Store({
    // Наальное состояние
    state: {
        cards: [],
        card: null,
        cart: [],
    },
    // Прокидываем полученные данные в начальное состояние
    mutations: {
        SET_CARDS_TO_STATE: (state, cards) => {
            state.cards = cards
        },

        SET_CARD_TO_STATE: (state, card) => {
            state.card = card
        },

        SET_CARD_DESTROY: (state) => {
            state.card = null
        },

        SET_SEARCH_VALUE: (state, value) => {
            state.card = value
        },

        SET_CART: (state, card) => {
            state.cart.push(card)
        }
    },
    // Делаем запрос на сервер 
    actions: {
        async GET_CARDS_FROM_API({ commit }, searchValue = "") {
            return await axios(`http://localhost:3000/cards?q=` + searchValue, {
                method: "GET"
            }).then(cards => {
                commit("SET_CARDS_TO_STATE", cards.data);
                return cards;
            }).catch((error) => {
                console.log('Нет данных');
                return error;
            })
        },

        async GET_CARD_FROM_API({ commit }, id) {
            return await axios(`http://localhost:3000/cards/` + `${id}`, {
                method: "GET"
            }).then(card => {
                commit("SET_CARD_TO_STATE", card.data);
                return card;
            }).catch((error) => {
                console.log('Нет данных');
                return error;
            })
        },


        ADD_TO_CART({ commit }, card) {
            commit('SET_CART', card)
        }
    },
    getters: {
        CARDS(state) {
            return [...state.cards]
        },
        CART(state) {
            return state.cart;
        }
    }
})

export default store;