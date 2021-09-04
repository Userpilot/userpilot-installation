<template>
  <router-view />
</template>

<script>
import { Userpilot } from "userpilot";

export default {
  name: "App",
  created() {
    if (localStorage.getItem("authenticated") === "true") {
      console.groupCollapsed('[Userpilot] Identify')
      console.info("call `Userpilot.identify()`");
      console.log("Replace {456987} with the logged in user identifier");
      console.groupEnd();
      Userpilot.identify("4321984", {
        name: "John Doe",
        email: "john@site-domain.com",
        created_at: "2018-07-11",
      });
      
      console.groupCollapsed('[Userpilot] Reload')
      console.log("Call Userpilot.reload() after identify");
      console.groupEnd();
      Userpilot.reload();
    }
  },
  watch: {
    $route() {
      const authenticated = localStorage.getItem("authenticated");
      if (authenticated === "true") {
        console.groupCollapsed('[Userpilot] Reload')
        console.log("Call Userpilot.reload() on page changes");
        console.log(
          "If you want to trigger experiences on anonymous users, no need to check if the user is authenticated."
        );
        console.groupEnd();
        Userpilot.reload();
      }
    },
  },
};
</script>

<style src="./styles/app.scss" lang="scss"/>


