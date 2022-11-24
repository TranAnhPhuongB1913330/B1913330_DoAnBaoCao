<template>
    <div>
      <Header></Header> 
      <Productmen></Productmen>
      <Footer></Footer>
    </div>
  
    
</template>
<script>
import Productmen from "../components/Productmen.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default{
  
    components: {
      Header,
      Productmen,
      Footer
    },
    
}
    
</script>
  
<style scoped>
  
  
</style>
  