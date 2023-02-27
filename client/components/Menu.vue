<template>
  <v-container>
      <v-card>
          <v-tabs v-model="tab">
            <v-tab
                v-for="menu in menus"
                :key=menu._id
            >
                {{menu.name}}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="menu in menus"
                :key="menu._id"
            >
                <Section
                    :theMenu="menu.sections"
                    :sections="menuSections(menu.sections)"
                    :items="items"
                    :ingredients="ingredients"
                />
            </v-tab-item>
        </v-tabs-items>
      </v-card>
  </v-container>
</template>

<script>
export default {
    props:{
        items:{
            type: Array,
            required: true
        },
        menus:{
            type: Array,
            required: true
        },
        ingredients:{
            type: Array,
            required: true
        },
        sections:{
            type: Array,
            required: true
        }
    },
    data(){
        return {
            tab:null
        }
    },
    methods: {
        menuSections(sec){
            let i
            let j
            const theMenuSections=[]
            for(i=0;i<sec.length;i++){
                for(j=0;j<this.sections.length;j++){
                    if(sec[i] === this.sections[j]._id){
                        theMenuSections.push(this.sections[j])
                    }
                }
            }
            return theMenuSections
        }
    }
     

}
</script>