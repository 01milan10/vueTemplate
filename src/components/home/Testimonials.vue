<template>
  <v-container fluid class="grey lighten-4 mt-10">
    <v-row class="mx-auto flex-column align-center justify-center">
      <h1 class="font-weight-light display-1 text-center pt-10">Testimonials</h1>
      <v-divider class="black" width="25%"></v-divider>
      <v-carousel
        light
        hide-delimiter-background
        :show-arrows="false"
        :cycle="true"
        :continuous="true"
        style="width: 75%"
      >
        <v-carousel-item v-for="(carousel_item, i) in carousel_items" :key="i">
          <v-row class="flex-column align-center mx-auto mt-10">
            <v-avatar size="100">
              <v-img :src="carousel_item.avatar"></v-img>
            </v-avatar>
            <p
              class="grey--text mt-5 font-weight-light font-italic carousel-content text-center text-sm-h6"
              style="width: 50%"
            >"{{carousel_item.content}}"</p>
            <span class="black--text font-weight-medium mt-5">{{carousel_item.person}}</span>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carousel_items: [
        {
          avatar: "/img/person_1.jpg",
          person: "Johan Hill",
          position: "CEO & Founder",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia praesentium voluptate iure molestiae perferendis facilis, libero optio molestias odio odit minima sit et nulla dolorem? At sunt voluptate assumenda?"
        },
        {
          avatar: "/img/person_2.jpg",
          person: "Johan Hill",
          position: "CEO & Founder",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia praesentium voluptate iure molestiae perferendis facilis, libero optio molestias odio odit minima sit et nulla dolorem? At sunt voluptate assumenda?"
        },
        {
          avatar: "/img/person_3.jpg",
          person: "Johan Hill",
          position: "CEO & Founder",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia praesentium voluptate iure molestiae perferendis facilis, libero optio molestias odio odit minima sit et nulla dolorem? At sunt voluptate assumenda?"
        },
        {
          avatar: "/img/person_4.jpg",
          person: "Johan Hill",
          position: "CEO & Founder",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia praesentium voluptate iure molestiae perferendis facilis, libero optio molestias odio odit minima sit et nulla dolorem? At sunt voluptate assumenda?"
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel-content {
  font-size: 25px;
  line-height: 1.7;
}
</style>

