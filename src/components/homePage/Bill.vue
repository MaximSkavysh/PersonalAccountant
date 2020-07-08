<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p v-for="cur of curencies" :key="cur" class="currency-line">
          <span>{{getCurrency(cur) | currency(cur)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['rates'],
  data: () => ({
    curencies: ['GBP', 'USD', 'EUR']
  }),
  computed: {
    base() {
      return this.$store.getters.info.bill;
    }
  },
  methods: {
    getCurrency(currency) {
      return Number.isNaN(Math.floor(this.base / this.rates[currency])) ? this.base : Math.floor(this.base / this.rates[currency]);
    }
  }
};
</script>
