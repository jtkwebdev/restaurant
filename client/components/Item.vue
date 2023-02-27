<template>
  <v-container>
      <v-row>
        <v-col
        v-for="item in items"
        :key="item._id"
        cols="12"
        sm="4"
        >
        <v-card
                class="mx-auto"
                tile
            >
                <v-img
                class="white--text align-end"
                max-height="200"
                src="https://images.squarespace-cdn.com/content/v1/5a4d7dc0b0786964340c2d2d/1528936483224-27FS2J5EXJG0FR8PEPZM/Steak+plate.jpg?format=1500w"
                >
                <v-card-title>Words over image</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                </v-card-subtitle>

                <v-card-text class="text--primary">
                <div><strong>{{item.name}}</strong> --  ${{item.price/100}}</div>

                <div>{{item.description}}</div>
                </v-card-text>
            </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    props: {
        items: {
            type: Array
        }
    }
}
</script>