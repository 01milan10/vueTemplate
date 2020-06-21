<template>
  <v-parallax src="/img/parallax-section.jpg" height="auto">
    <v-container fluid class="mx-auto my-10" style="width:50%">
      <v-row class="flex-column align-center my-10">
        <h1 class="display-1 font-weight-light text-center white--text">Contact Us</h1>
        <v-divider class="grey lighten-3" width="25%"></v-divider>
      </v-row>
      <v-card class="grey lighten-4">
        <v-card-text>
          <v-form class="px-3" color="blue" ref="form">
            <v-text-field
              label="Full Name"
              v-model="name"
              prepend-icon="mdi-clipboard-account"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="email"
              prepend-icon="mdi-email"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              label="Subject"
              v-model="subject"
              prepend-icon="mdi-text-subject"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea label="Message" v-model="message" prepend-icon="mdi-message-reply"></v-textarea>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="mx-0 mt-3 blue white--text" rounded @click="submit" :loading="loading">
                Submit
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
</style>