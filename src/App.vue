<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-green-500">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <div class="flex items-center lg:order-3">
          <img src="./assets/logo.png" width="100" height="75">
        </div>
        <div class="flex items-center lg:order-1">
          <img src="./assets/logoname.png" width="200" height="100">
        </div>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              <RouterLink to="/inicio">Inicio</RouterLink>
            </li>
            <li
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              <RouterLink to="/personajes">Personajes</RouterLink>
            </li>
            <li
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              <RouterLink to="/acercade">Acerca de</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
