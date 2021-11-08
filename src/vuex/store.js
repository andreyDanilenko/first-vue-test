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
        searchValue: '',
        isLoading: false,
        isLoadingAddToCart: false
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
            state.searchValue = value
        },

        SET_ADD_TO_CART: (state, card) => {
            const index = state.cards.findIndex((c) => c.id === card.id);

            if (index === -1) {
                throw new Error('Can\'t update unexisting film');
            }

            state.cards = [
                ...state.cards.slice(0, index),
                card,
                ...state.cards.slice(index + 1),
            ];
        },

        SET_REMOVE_FROM_CART: (state, card) => {
            const index = state.cards.findIndex((c) => c.id === card.id);

            if (index === -1) {
                throw new Error('Can\'t update unexisting film');
            }

            state.cards = [
                ...state.cards.slice(0, index),
                card,
                ...state.cards.slice(index + 1),
            ];
        }
    },
    // Делаем запрос на сервер 
    actions: {
        async GET_CARDS_FROM_API({ commit }, searchValue = "") {
            this.state.isLoading = true;
            commit("SET_SEARCH_VALUE", searchValue);
            this.state.cards = []
            return await axios(`http://localhost:3000/cards?q=` + this.state.searchValue, {
                method: "GET"
            }).then(cards => {
                commit("SET_CARDS_TO_STATE", cards.data);
                this.state.searchValue = ""
                return cards;
            }).catch((error) => {
                console.log('Нет данных');
                return error;
            }).finally(() => {
                this.state.isLoading = false;
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


        async ADD_TO_CART({ commit }, card) {
            this.state.isLoadingAddToCart = true;
            console.log(this.state.isLoadingAddToCart);
            fetch(`http://localhost:3000/cards/` + `${card.id}`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        ...card,
                        isCart: !card.isCart,
                    }
                )
            }).then((response) => response.json()
            ).then((card) => {
                setTimeout(() => {
                    commit("SET_ADD_TO_CART", card);
                    this.state.isLoadingAddToCart = false
                }, 2000)
            }).finally(() => { })
        },


        REMOVE_FROM_CART({ commit }, card) {
            console.log(card);
            fetch(`http://localhost:3000/cards/` + `${card.id}`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        ...card,
                        isCart: !card.isCart,
                    }
                )
            }).then((response) => response.json()
            ).then((card) => {
                commit("SET_REMOVE_FROM_CART", card);
            })
        }
    },
    getters: {
        CARDS(state) {
            return [...state.cards]
        },
        CART(state) {
            return [...state.cards].filter(card => card.isCart);
        }
    }
})

export default store;