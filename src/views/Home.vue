<template>
  <div class="">
    <div id="myCarousel" class="mr-0 carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="post in posts" class="carousel-item">
            <div class="mask flex-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-7 col-12 order-md-1 order-2">
                            <h4><a href="/viewproduct/" class="tx">{{post.name}}</a></h4>
                            <p>{{post.description}}</p> <br> <a href="/add/" class="by">ACHETER MAINTENANT</a></p>
                        </div>
                        <div class="col-md-5 col-12 order-md-2 order-1"><img v-bind:src=post.prev1 class="mx-auto" alt="slide"></div>
                    </div>
                </div>
              </div>
        </div>
          <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span>
          </a>
      </div>
    </div>
    <div class="card card-main mb-3 border-light">
      <div class="card-header"><span class="bold">NOUVEAUTES </span>&nbsp;<a href="/viewbynewest">Voir plus</a></div>
      <div class="card-body">
        <div class="card-group">
            <div v-for="post in posts" class="card sub">
              <div class="img-zoom">
                <img v-bind:src=post.prev1 class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h6 class="card-title"><a>{{post.name}}</a></h6>
                <p class="card-text">
                  {{post.price}}DA
                </p>
              </div>
              <div class="card-footer">
                <button class="addtocart"><i class="fas fa-shopping-cart"></i>&nbsp;Ajouter au panier</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      posts: [],
      model: {}
    }
  },
  async created () {
    this.refreshPosts()
  },
  methods: {
    async refreshPosts () {
      this.loading = true
      this.posts = await api.getPosts()
      this.loading = false
    },
    async populatePostToEdit (post) {
      this.model = Object.assign({}, post)
    },
    async savePost () {
      if (this.model.id) {
        await api.updatePost(this.model.id, this.model)
      } else {
        await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()
    },
    async deletePost (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deletePost(id)
        await this.refreshPosts()
      }
    }
  }
}
</script>
