<template>
  <Page actionBarHidden="true" backgroundColor="lightgreen">
    <StackLayout heigth="60" verticalAlignment="top">
      <Button text="Clique aqui" @tap="clickHere" android:marginTop="20"></Button>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    clickHere() {
      alert("tap");
    }
  }
};
</script>

<style>
</style>