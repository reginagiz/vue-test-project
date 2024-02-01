<template>
    <h1 class="text-3xl font-bold mb-15">Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..."></my-input>
    <div class="my-4 mx-0 flex justify-between">
      <my-button @click="showDialog" >Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
    <div v-else>Идет загрузка...</div>
    <div ref="observer" class="h-30 bg-green"></div>
    <!--    <div class="flex mt-15">-->
    <!--      <div class="border-2 p-10 mx-5 w-40 text-center" :class="{ 'border-4 border-green': page === pageNumber }" v-for="pageNumber in totalPages" :key="pageNumber"-->
    <!--      @click="changePage(pageNumber)">{{ pageNumber }}</div>-->
    <!--    </div>-->
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import MyInput from "@/components/UI/MyInput.vue";
export default {
  components:{
    MyInput,
    PostList,PostForm
  },
  data(){
    return{
      posts:[],
      page:1,
      limit:10,
      totalPages:0,
      dialogVisible:false,
      isPostLoading:false,
      selectedSort:'',
      searchQuery:'',
      sortOptions:[
        {value:'title',name:'По названию'},
        {value:'body',name:'По описанию'},
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
      this.dialogVisible= false;
    },
    removePost(post){
      this.posts= this.posts.filter(p=>p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible= true
    },
    changePage(pageNumber){
      this.page= pageNumber
    },
    async fetchPosts(){
      try {
        this.isPostLoading = true;
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts',{params:{_page:this.page,
            _limit:this.limit
          } });
        this.totalPages= Math.ceil(response.headers['x-total-count']/this.limit)
        this.posts = response.data
      }catch(e){
        alert("Ошибка")
      }finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePost(){
      try {
        this.page+=1;
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts',{params:{_page:this.page,
            _limit:this.limit
          } });
        this.totalPages= Math.ceil(response.headers['x-total-count']/this.limit)
        this.posts = [...this.posts,...response.data]
      }catch(e){
        alert("Ошибка")
      }
    }
  },
  mounted() {
    this.fetchPosts()
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback= (entries,observer)=>{
      if(entries[0].isIntersecting && this.page < this.totalPages){
        this.loadMorePost()
      }
    };
    const  observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((post1,post2)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch:{
    // page(){
    //   this.fetchPosts()
    // }
  }
}

</script>
<style>
</style>