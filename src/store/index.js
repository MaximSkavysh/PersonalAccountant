import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import info from './info';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    currncyData: {}
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    setCurrData(state, currncyData) {
      state.currncyData = currncyData;
    },
    clearCurrData(state) {
      state.currncyData = {}
    }
  },
  getters: {
    error: s => s.error,
    currncyData: s => s.currncyData
  },
  actions: {
    async fetchCurrency({ commit }) {

      const res = await fetch(
        `https://api.exchangeratesapi.io/latest?symbols=USD,BRL,GBP`
      );
      commit('setCurrData', await res.json());
    }
  },
  modules: {
    auth,
    info
  }
});
