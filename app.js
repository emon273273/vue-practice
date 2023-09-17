const app=Vue.createApp({

    data(){

        return {

            title:"the final empire",
            autor:"barandon sanderson",
            age:45,
            isshow:true,
            x:0,
            y:0,
            books:[
                {
                    id:1,
                    name:"python",
                    img:'assets/images1.jpeg',
                    isFav:true
                },
                {
                    id:2,
                    name:"javascript",
                    img:'assets/images2.jpg',
                    isFav:false
                },
                {
                    id:3,
                    name:"machine learning",
                    img:"assets/images3.jpg",
                    isFav:true
                }
            ],
            url:"https://stackoverflow.com/questions/34842284/giving-a-value-to-a-href-in-a-anchor-tag-with-vue"
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
        },
        toggoleisfav(book){

            book.isFav=!book.isFav;
        }
    }
   
})

app.mount("#app")