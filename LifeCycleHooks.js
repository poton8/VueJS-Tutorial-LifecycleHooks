var create = new Vue({
    el: '#create',
    data:{
        name: "Peyton"
    },
    
    beforeCreate(){
        console.log("Nothing has been created")
    },
    created(){
        console.log("The data has been created but is still " + this.$el)
    },

    beforeMount: function () {
        console.log(this.$el + " is not mounted yet")
      },

    mounted: function() {
      console.log("The data has been mounted and is " + this.$el.textContent) 
      setInterval(() => {
        this.name = "Johnny"
      }, 3000)
    },

    beforeUpdate: function() {
        console.log("The name is being changed to " + this.name) 
    },
    updated: function() {
        console.log("The name has been changed to " + this.name)
    },

    beforeDestroy: function() {
        console.log("Name is being destroyed")
    },

    destroyed: function() {
        console.log("Name has been destroyed")
      }
})