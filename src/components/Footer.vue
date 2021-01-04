<template>
  <div class="footer d-flex justify-content-between align-items-center">
    <div class="contact">
      <h4>Contact</h4>
      <ul>
        <li><img src="../assets/mail.png" /> info@wantit.com</li>
        <li><img src="../assets/telephone.png" /> (020) 123 45 67</li>
      </ul>
    </div>
    <div class="logo-brand">
      WANTIT.
    </div>
    <div class="address">
      <h4>Address</h4>
      <ul>
        <li><img src="../assets/location.png" /> Houtlaan 4</li>
        <li class="right">6525 XZ</li>
      </ul>
    </div>
  </div>
</template>

<script>
// ...
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dosis&family=Open+Sans&display=swap");

$sm-display: 48rem;

.footer {
  border-top: 1px solid black;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  color: black;
  padding: 2rem 3rem 2rem 3rem;
  font-family: "Dosis", "sans-serif";
  font-size: 1.3rem;

  .logo-brand {
    font-size: 3rem;
  }

  ul {
    list-style: none;
    font-size: 1rem;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 0;
    font-family: "Open Sans", "sans-serif";
  }

  li.right {
    float: right;
  }
}

@media (max-width: $sm-display) {
  .footer {
    padding: 1rem 2rem 1rem 2rem;
    font-size: 0.7rem;

    .logo-brand {
      font-size: 2.4rem;
    }
  }
}
</style>
