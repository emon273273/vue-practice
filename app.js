const app=Vue.createApp({

    data(){

        return {

            title:"the final empire",
            autor:"barandon sanderson",
            age:45,
            isshow:true,
            x:0,
            y:0
        }
    },

    methods:{

        changetitle(isshow){

        //  this.title="something new"

        this.isshow=!this.isshow
        // console.log("clicke")
        },

        // handleevent1(){

        //    console.log("mouse hover event") 
        // },

        // handleevent2(){

        //     console.log("mouse leave")
        // },

        // handleevent3(){

        //     console.log("double clicked")
        // }


        handleclick(e,data){

            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handlemousemove(e){
          this.x=e.offsetX
           this.y=e.offsetY
        }
    }
   
})

app.mount("#app")