<template>
  <div class="card card-main mb-3 border-ligh">
    <div class="row">
      <div class="col-3 filter">
        <h5>Filtrer Les Produits: </h5>
        <h6>Prix: </h6>
        <a href="/shop/filterbyex"><i class="fas fa-arrow-up"></i>&nbsp;Le Plus Cher</a>
        <a href="/shop/filterbych"><i class="fas fa-arrow-down"></i>&nbsp;Le Moins Cher</a>
        <h6>Autres Filtres: </h6>
        <a href="#"><i class="fas fa-calendar"></i>&nbsp;Date</a>
      </div>
      <div class="col-9 elem">
        <div class="card-header" style="text-align: center;;font-size: 1.5em !important;"><span class="bold"> ARTICLES </span></div>
        <div class="card-body">
          <div class="card-group">
            <ul class="list-group list-group">
                <li v-for="post in posts" :key="post.id" class="list-group-item" style="width:100% !important;">
                  <div class="card mb-3" style="padding: 2em;">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img style="object-fit: cover;width: 40%;padding: 1em;" class="card-img" alt="..." v-bind:src=post.prev1>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title"><a style="padding: 0 !important;margin: 0 !important;">{{post.name}}</a></h5>
                        <h5 class="price">{{post.price}}DA</h5>
                        <h6>Catégorie: {{post.category}}</h6>
                        <p class="card-text" style="padding-bottom: 1em !important;">{{post.description}}</p>
                        <a class="atc" style="
                        background: transparent;border: 1px solid #ea1b25;padding: 1em;" href="#"><i class="fas fa-shopping-cart"></i>&nbsp;Ajouter au panier</a>
                      </div>
                    </div>
                  </div>
                </div>
                </li>
            </ul>
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
