<template>
  <nav class="ma">
    <v-app-bar flat app color="black">
      <router-link to="/">
        <v-img
          src="/img/footer-icon.png"
          class="ml-4"
          contain
          max-height="150"
          max-width="150px"
          alt="logo"
        ></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-hover v-slot:default="{hover}">
          <v-btn
            class="t-btn font-weight-light"
            text
            :color="`${hover?'blue':'grey'}`"
            to="/"
            :elevation="hover?1:0"
          >Home</v-btn>
        </v-hover>
        <v-hover v-slot:default="{hover}">
          <v-btn
            class="t-btn font-weight-light"
            text
            :color="`${hover?'blue':'grey'}`"
            router
            to="/features"
            :elevation="hover?1:0"
          >Features</v-btn>
        </v-hover>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot:default="{hover}">
              <v-btn
                text
                class="t-btn"
                :color="`${hover?'blue':'grey'}`"
                v-bind="attrs"
                v-on="on"
                :elevation="hover?1:0"
                to="/about-us"
              >
                <span class="font-weight-light">About Us</span>
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </v-hover>
          </template>
          <v-list dense rounded>
            <v-list-item
              v-for="(item, index) in drop_links"
              :key="index"
              :to="item.route"
              color="primary"
              class="text-center"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-hover v-slot:default="{hover}">
          <v-btn
            class="t-btn font-weight-light"
            text
            :color="`${hover?'blue':'grey'}`"
            to="/testimonials"
            :elevation="hover?1:0"
          >Testimonials</v-btn>
        </v-hover>
        <v-hover v-slot:default="{hover}">
          <v-btn
            class="t-btn font-weight-light"
            text
            :color="`${hover?'blue':'grey'}`"
            to="/gallery"
            :elevation="hover?1:0"
          >Gallery</v-btn>
        </v-hover>
        <v-hover v-slot:default="{hover}">
          <v-btn
            class="t-btn font-weight-light"
            text
            :color="`${hover?'blue':'grey'}`"
            to="/contact-us"
            :elevation="hover?1:0"
          >Contact Us</v-btn>
        </v-hover>
        <Login />
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-hover v-slot:default="{hover}">
          <v-btn
            class="font-weight-light"
            text
            :color="`${hover?'blue':'grey'}`"
            href="/login"
            :elevation="hover?1:0"
          >Login</v-btn>
        </v-hover>
      </v-toolbar-items>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon class="grey--text" @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      </span>
    </v-app-bar>
    <v-navigation-drawer app width="150px" color="black" class="hidden-md-and-up" v-model="drawer">
      <v-list shaped>
        <v-list-item
          v-for="(link,i) in nav_links"
          :key="i"
          router
          :to="link.route"
          dark
          color="blue"
        >
          <v-list-item-content>
            <v-list-item-title class="grey--text font-weight-light">{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Login from "../auth/Login";
export default {
  data() {
    return {
      snackbar: false,
      drawer: false,
      drop_links: [
        {
          title: "Our Team",
          route: "/our-team"
        }
      ],
      dropdown_font: ["Arial", "Times New Roman", "Calibri", "Roboto"],
      nav_links: [
        {
          title: "Home",
          route: "/"
        },
        {
          title: "Features",
          route: "/features"
        },
        {
          title: "About Us",
          route: "/about-us"
        },
        {
          title: "Testimonials",
          route: "/testimonials"
        },
        {
          title: "Gallery",
          route: "/gallery"
        },
        {
          title: "Contact Us",
          route: "/contact-us"
        }
      ]
    };
  },
  components: {
    Login
  }
};
</script>

<style scoped>
/* .t-btn:hover {
  transform: scale(1.02);
  transition: 0.35s ease-in-out;
} */
</style>