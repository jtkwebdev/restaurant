<template>
  <v-card>
    <v-card-title>
      {{item.name}} -- ${{item.price/100}}
    </v-card-title>
    <v-card-subtitle>{{item.description}}</v-card-subtitle>
    <v-card
      v-for="(op,i) in menu"
      :key="i"
    >
      <v-card-title>
        {{op.option.name}}
      </v-card-title>
      <v-card-subtitle>
        Choose: {{op.option.choice}}
      </v-card-subtitle>
      <v-row>
        <v-col
          v-for="(ch,k) in choice[i].choices"
          :key="k"
          cols="9"
          sm="3"
        >
       <v-chip
        close
        @click:close="removeChoice(i,k)"
       > {{ch.name}} </v-chip>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(ingr,j) in op.ingr"
          :key="j"
        >
          <v-chip
            @click="addSelection(ingr,op.option.choice,i)"
          >{{ingr.name}}</v-chip>
        </v-col>
      </v-row>
    </v-card>
    <v-card-actions>
      <v-btn @click="addToOrder">Add to order</v-btn>
      <v-btn @click="cancelSelection">Cancel Selection</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name:"SelectionModal",
  props:{
    selection: {
      type: Object,
      requierd: true
    }
  },
  data(){
    return{
      item: this.selection, // object
      choice: this.selection.choice, // array of objects
      menu: this.selection.optionsMenu // array of objects containing array of ingr
    }
  },
  methods: {
    addSelection(ingr,max,i){
      if(this.choice[i].choices.length < max){
       this.choice[i].choices.push(ingr)
      }

    },
    removeChoice(i,j){
      this.choice[i].choices.splice(j,1)
    },
    addToOrder(){
      let price = this.item.price;
      let i;
      let order;
      if(this.choice != null){
        for(i=0;i<this.choice.length;i++){
          let j
          for(j=0;j<this.choice[i].choices.length;j++){
            price += this.choice[i].choices[j].price
          }
        }
        order = {
          choice: this.choice,
          name: this.item.name,
          price
        }
      }
      else{
        order = {
          name: this.item.name,
          price
        }
      }
      this.$emit("getSelection",order)
    },
    cancelSelection(){
      this.$emit("getSelection")
    }
  }
}
</script>