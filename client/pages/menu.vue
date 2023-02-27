<template>
  <div>
      <Menu
        :items="items"
        :menus="menus"
        :ingredients="ingredients"
        :sections="sections"
      />
  </div>
</template>

<script>
import axios from 'axios';
export default {

  async asyncData() {
    const items = await axios.get('mongodb://localhost:9001/items')
    const ingredients = await axios.get('mongodb://localhost:9001/ingredients')
    const menus = await axios.get('mongodb://localhost:9001/menus')
    const sections = await axios.get('mongodb://localhost:9001/sections')
    return { items: items.data, ingredients: ingredients.data, menus: menus.data, sections: sections.data}
  },
  data() {
    return {}
  }
}
</script>
<style scoped></style>
