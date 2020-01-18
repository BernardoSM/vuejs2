<template>
  <Page>
    <ActionBar class="home">
      <ActionItem>
        <Label class="home__icon far" text.decode="&#xf0f3;" @tap="alerta"></Label>
      </ActionItem>
      <StackLayout backgroundColor="#222D5F" width="auto">
        <Image height="60" src="~/liberfly-white.png" class="home__image"></Image>
        <Label text="Bem vindo," class="home__welcome" height="15" />
        <Label text="Bernardo" class="home__username" height="40" />
        <GridLayout class="home__wallet" columns="70, *" rows="30, *" backgroundColor="#ffffff">
          <Label class="far" text.decode="&#xf3d1;" row="0" col="0" rowSpan="2"/>
          <Label class="text" text="Carteira" row="0" col="1" rowSpan="2" />
          <Label class="value" text="R$100,00" row="1" col="1" rowSpan="2" />
        </GridLayout>
      </StackLayout>
    </ActionBar>

    <StackLayout>
      <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
          <StackLayout orientation="horizontal">
            <Label :text="item.name" textWrap="true"></Label>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import ItemDetails from "./ItemDetails";

export default {
  data: () => {
    return {
      items: [
        {
          name: "Item 1",
          description: "Description for Item 1"
        },
        {
          name: "Item 2",
          description: "Description for Item 2"
        },
        {
          name: "Item 3",
          description: "Description for Item 3"
        },
        {
          name: "Item 4",
          description: "Description for Item 4"
        },
        {
          name: "Item 5",
          description: "Description for Item 5"
        },
        {
          name: "Item 6",
          description: "Description for Item 6"
        },
        {
          name: "Item 7",
          description: "Description for Item 7"
        },
        {
          name: "Item 8",
          description: "Description for Item 8"
        },
        {
          name: "Item 9",
          description: "Description for Item 9"
        },
        {
          name: "Item 10",
          description: "Description for Item 10"
        },
        {
          name: "Item 11",
          description: "Description for Item 11"
        },
        {
          name: "Item 12",
          description: "Description for Item 12"
        },
        {
          name: "Item 13",
          description: "Description for Item 13"
        },
        {
          name: "Item 14",
          description: "Description for Item 14"
        },
        {
          name: "Item 15",
          description: "Description for Item 15"
        },
        {
          name: "Item 16",
          description: "Description for Item 16"
        }
      ]
    };
  },
  methods: {
    onItemTap(args) {
      const view = args.view;
      const page = view.page;
      const tappedItem = view.bindingContext;

      this.$navigateTo(ItemDetails, {
        props: {
          context: tappedItem,
          animated: true,
          transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
          }
        }
      });
    },
    alerta() {
      alert("tap");
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
