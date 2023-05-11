<template>
  <footer class="footer">
    This is game owned by ❤️ Phan Van Sinh ❤️
    <!-- <a href="#" class="header__link"><sup>Click here</sup></a> -->
  </footer>
</template>

<script>
export default {
  name: "FooterScreen",
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
  background: var(--color-bg-black);
}
.header__link {
  font-size: 1.6rem;
  color: rgb(60, 100, 232);
}
.header__link:hover {
  opacity: 0.8;
}
</style>
