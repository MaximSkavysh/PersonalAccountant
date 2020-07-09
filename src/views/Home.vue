<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <Bill :rates="currency.rates" />
      <Currency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>
<script>
import Bill from '../components/homePage/Bill';
import Currency from '../components/homePage/Currency';
export default {
  name: 'home',
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted() {
    if (!Object.keys(this.$store.state.currncyData).length) {
      await this.$store.dispatch('fetchCurrency');
    }
    this.currency = this.$store.getters.currncyData;

    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true;
      await this.$store.dispatch('fetchCurrency');
      this.currency = this.$store.getters.currncyData;
      this.loading = false;
    }
  },
  components: {
    Bill,
    Currency
  }
};
</script>
