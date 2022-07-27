<template>
  <div class="navbar-wrapper">
    <div class="navbar-left">
      <span class="navbar-header">COMPANY</span>
      <div class="navbar-links">
        <nuxt-link :to="localePath('/')" class="button--green">{{
          $t("home")
        }}</nuxt-link>
        <nuxt-link :to="localePath('about')" class="button--green">{{
          $t("about")
        }}</nuxt-link>

        <button class="button--green" @click="console.log('test')">Log</button>
      </div>
    </div>
    <div class="language-wrapper">
      <svg
        class="w-6 h-6"
        width="36"
        height="36"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <select class="bg-transparent" name="locales" v-model="locale">
        <option
          v-for="loc in locales"
          class="text-gray-900"
          :key="loc.code"
          :value="loc.code"
          :selected="loc.code === locale"
        >
          {{ loc.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { useI18n, useLocalePath, useSwitchLocalePath } from "#i18n";
import { navigateTo, useRoute } from "#imports";

const switchLocalePath = useSwitchLocalePath();
const route = useRoute();

const localePath = useLocalePath();

const { locales, locale } = useI18n();

const updateLanguageRoute = (code) => {
  console.log("updating route", route.fullPath);
  navigateTo({
    path: switchLocalePath(code ?? locale.value),
  });
};
</script>

<style scoped>
.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
.navbar-links,
.navbar-left {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.navbar-header {
  font-weight: 800;
  font-size: 1.5rem;
}
.language-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.language-wrapper > select {
  font-size: 1.2rem;
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
}
</style>