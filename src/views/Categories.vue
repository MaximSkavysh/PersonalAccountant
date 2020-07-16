<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div class="row" v-else>
        <CatergoryCreate @created="addNewCategory" />
        <CatergoryEdit :categories="categories" />
      </div>
    </section>
  </div>
</template>
<script>
import CatergoryCreate from '../components/CatergoryCreate';
import CatergoryEdit from '../components/CatergoryEdit';
export default {
  name: 'catigories',
  data: () => ({
    categories: [],
    loading: true
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.loading = false;
  },
  components: {
    CatergoryCreate,
    CatergoryEdit
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
      console.log(this.categories);
    }
  }
};
</script>
