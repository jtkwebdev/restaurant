<template>
    <v-container id="item-background">
        <v-row>
                <v-col
                    v-for="item in theItems"
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

                        <v-card-actions>
                        <v-btn
                            color="orange"
                            text
                            @click="addSelection(item)"
                        >
                            Order
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:{
        theItems:{
            type: Array,
            required: true
        }
    },
    methods: {
        addSelection(item){
            const theItem = {
                description: item.description,
                name: item.name,
                options: item.options,
                price: item.price,
                section: item.section,
                _id: item._id
                
            }
            this.$emit('passToMenu', theItem)
        }
    }
}
</script>