<template>
  <v-container>
    <v-row>
      <v-col>
        <template v-if="selection.flag">
          <v-dialog>

          </v-dialog>
        </template>
        <OrderMenu
          :items="items"
          :menus="menus"
          :ingredients="ingredients"
          :sections="sections"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default { 
  async asyncData() {
    const items = await axios.get('mongodb://localhost:9001/items')
    const ingredients = await axios.get('mongodb://localhost:9001/ingredients')
    const menus = await axios.get('mongodb://localhost:9001/menus')
    const sections = await axios.get('mongodb://localhost:9001/sections')
    return { items: items.data, ingredients: ingredients.data, menus: menus.data, sections: sections.data}
  },
  
  data() {
    return {
      checkoutFlag:false,
      selection: {
        flag: false
      }
    }
  }
}
</script>

<style scoped>
#nav-drawer{
  background-color: transparent;
}
#checkout{
  background-color: transparent;
}
</style>
