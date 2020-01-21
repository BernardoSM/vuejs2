<template>
  <Page>
    <StackLayout>
      <Label text="Página 1" class="page-name"></Label>
      <Button text="Proxima pagina" @tap="page1BtnTap"></Button>
    </StackLayout>
  </Page>
</template>

<script>
import Page2Page from "./Page2Page";

export default {
  components: {
    Page2Page
  },
  methods: {
    page1BtnTap(args) {
      this.$navigateTo(Page2Page, { frame: "home-page" });
    }
  }
};
</script>

<style></style>
