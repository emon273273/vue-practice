<script>

import Modal from './components/Modal.vue'
export default{

  components:{Modal},
  name:"App",
  data(){
    return{
      title:"this is my first app",
      heading:"this is emonsab",
      content:"this is content"

    }
    

  },
  methods:{

    clicked(){


      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus();
    }

  }
}
</script>

<template>
<h1>Hello world</h1>
<!-- <p>{{ title }}</p>
<input type="text" ref="name">
<button @click="clicked">click</button> -->

<Modal :heading="heading" :content="content" theme="red"/>

</template>

<style scoped>

</style>
