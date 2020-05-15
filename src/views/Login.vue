<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="$v.user.email.$model"
          :class="{ 'is-invalid': submitted && $v.user.email.$error }"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="!$v.user.email.required"
          >Email is required</small
        >
        <small class="helper-text invalid" v-if="!$v.user.email.email"
          >Email is invalid</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="$v.user.password.$model"
          :class="{ 'is-invalid': submitted && $v.user.password.$error }"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="!$v.user.password.required"
          >Password is required</small
        >
        <small class="helper-text invalid" v-if="!$v.user.password.minLength"
          >Password must have at least
          {{ $v.user.password.$params.minLength.min }} letters.</small
        >
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    submitHandler() {
      this.submitted = true;
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
      this.$router.push('/');
    }
  }
};
</script>
