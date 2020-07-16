<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="$v.category.title.$model"
            :class="{ 'is-invalid': submitted && $v.category.title.$error }"
          />
          <label for="name">Название</label>
          <span class="helper-text invalid" v-if="!$v.category.title.required">Введите название</span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="$v.category.limit.$model"
            :class="{ 'is-invalid': submitted && $v.category.limit.$error }"
          />
          <label for="limit">Лимит</label>
          <span
            class="helper-text invalid"
            v-if="!$v.category.limit.minValue"
          >Минимальная величина {{ $v.category.limit.$params.minValue.min }}</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { required, minValue } from 'vuelidate/lib/validators';
import M from 'materialize-css';
export default {
  data() {
    return {
      category: {
        title: '',
        limit: 1
      },
      submitted: false
    };
  },
  validations: {
    category: {
      title: { required },
      limit: { required, minValue: minValue(1) }
    }
  },
  mounted() {
    M.updateTextFields();
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      try {
        const categoryData = await this.$store.dispatch('createCategory', this.category);
        this.category.title = ''
        this.category.limit = 1
        this.$v.$reset()
        this.$toaster.info(`Category ${categoryData.title} was created`)
        this.$emit('created', categoryData)
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>