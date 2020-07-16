<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form>
        <div class="input-field">
          <select ref="select">
            <option v-for="c of categories" :key="c.id">{{ c.title }}</option>
          </select>
          <label>Выберите категорию</label>
        </div>

        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="$v.category.title.$model"
            :class="{ 'is-invalid': submitted && $v.category.title.$error }"
          />
          <label for="name">Название</label>
          <span class="helper-text invalid" v-if="!$v.category.title.required"
            >Введите название</span
          >
        </div>

        <div class="input-field">
          <input id="limit" type="number" />
          <label for="limit">Лимит</label>
          <span class="helper-text invalid">LIMIT</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import M from 'materialize-css';
import { required, minValue } from 'vuelidate/lib/validators';
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
   data() {
    return {
      category: {
        title: '',
        limit: 1
      },
      submitted: false,
      select: null
    };
  },
  validations: {
    category: {
      title: { required },
      limit: { required, minValue: minValue(1) }
    }
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
  },
  beforeDestroy() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  }
};
</script>
