<template>
  <Page actionBarHidden="true">
    <GridLayout>
      <Frame id="home-page">
        <HomePage />
      </Frame>

      <Frame @loaded="actionFrameLoaded">
        <ActionPage />
      </Frame>
    </GridLayout>
  </Page>
</template>

<script>
import HomePage from "./HomePage";
import ActionPage from "./ActionPage";
import { screen } from "tns-core-modules/platform";

export default {
  components: {
    HomePage,
    ActionPage
  },
  methods: {
    actionFrameLoaded(args) {
      const frame = args.object;

      frame.translateY = screen.mainScreen.heightDIPs - 140;
    }
  }
};
</script>
