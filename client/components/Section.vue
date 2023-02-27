<template>
  <v-card>
      <v-expansion-panels>
          <v-expansion-panel v-for="section in sections" :key="section._id">
              <v-expansion-panel-header>{{section.name}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                  <Item
                    :items="sectionItems(section)"
                  />
              </v-expansion-panel-content>
          </v-expansion-panel>
      </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
    props:{
        theMenu: {
            type: Array
        },
        sections: {
            type: Array
        },
        items: {
            type: Array
        },
        ingredients: {
            type: Array
        }
    },
    methods: {
        sectionItems(section){
            const theItems = []
            this.items.forEach(item =>{
                if(section._id === item.section_id){
                    item.section = section
                    theItems.push(item)
                }
            })
            return theItems
        },
    }
}
</script>

<style>

</style>