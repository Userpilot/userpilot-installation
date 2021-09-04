<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="12" class="login-part d-flex align-center justify-center">
          <v-row no-gutters class="align-start">
            <v-col
              cols="12"
              class="login-part d-flex align-center justify-center flex-column"
            >
              <div class="login-wrapper pt-md-4 pt-0">
                <v-form>
                  <v-container>
                    <v-row class="flex-column">
                      <v-img
                        src="@/assets/logo.svg"
                        contain
                        class="mb-6"
                      ></v-img>

                      <v-form>
                        <v-col>
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            value="product@work-domain.com"
                            label="Email Address"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            :rules="passRules"
                            type="password"
                            label="Password"
                            hint="At least 6 characters"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col class="d-flex justify-space-between">
                          <v-btn
                            class="text-capitalize"
                            large
                            :disabled="
                              password.length === 0 || email.length === 0
                            "
                            color="primary"
                            @click="login"
                            block
                          >
                            Login</v-btn
                          >
                        </v-col>
                      </v-form>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { Userpilot } from "userpilot";

export default {
  name: "Login",
  data() {
    return {
      email: "product@work-domain.com",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      createFullName: "John Smith",
      createEmail: "john@work-domain.com",
      createPassword: "123456",
      password: "123456",
      passRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Min 6 characters"
      ]
    };
  },
  methods: {
    login() {
      window.localStorage.setItem("authenticated", true);

      console.groupCollapsed('[Userpilot] Identify')
      console.info("call `Userpilot.identify()` after login");
      console.log("Replace {4321984} with the logged in user identifier");
      console.groupEnd();

      // Identify User on Userpilot
      Userpilot.identify("4321984", {
        name: "John Doe",
        email: "john@site-domain.com",
        created_at: "2018-07-11"
      });

      this.$router.push("/dashboard");
    }
  },
  created() {
    if (window.localStorage.getItem("authenticated") === "true") {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style src="./Login.scss" lang="scss" />
