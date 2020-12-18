<template>
  <div class="test">
    <RegistrationForm>
      
    </RegistrationForm>
  </div>
</template>

<script>
  import RegistrationForm from "./components/RegistrationForm"

  export default {
    name: 'App',
    components: {
      RegistrationForm
    }
  }
</script>

<style scoped>
  .test {
    width: 30%;
    height: 850px;
    padding: 1em;
    padding-top: 1.5em !important;
    padding-bottom: 1.5em !important;
    border-radius: 2%;
    border: solid blue;
    margin: auto;
    background-color: white;
    display: block;
    overflow-y: auto;
  }
  @media screen and (max-width: 1440px){
    .test{
      width: 90%;
      padding: 0.3em;
    }
  }
</style>