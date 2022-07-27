<template>
  <div class="container">
    <div class="navbar">
      <NavBar />
    </div>
    <div class="content">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 1rem;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2E495E;
  max-width: 1280px;
  margin: 0 auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00C48D;
  color: #00C48D;
  text-decoration: none;
  background-color: transparent;
  padding: 10px 30px;
  display: inline-flex;
  align-self: center;
}

.button--green:hover,
.nuxt-link-active {
  color: #fff;
  background-color: #00C48D;
  cursor: pointer;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #2E495E;
  color: #2E495E;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #2E495E;
}
</style>
