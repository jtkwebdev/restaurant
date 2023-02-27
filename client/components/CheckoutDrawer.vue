<template>
  <v-row id="nav-drawer" :style="{ 'min-height' : '100%' }">
    <v-col
      id="col1"
      :cols="widthCol1"
    >
      <v-list>
        <v-list-item absolute append>
          <v-list-item-content>
            Your Order Total ${{orderTotal/100}}
            <v-btn @click="submitOrder">Complete Order</v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(sel,i) in selected"
          :key="i"
        >
          <v-list-item-content>
            {{sel.name}} -- ${{sel.price/100}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col v-show="checkoutFormFlag" id="col2">
      <div id="col2-div">
        <v-form id="form">
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="order.fName"
                label="First Name"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="order.lName"
                label="Last Name"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="order.phone"
                label="phone"
              ></v-text-field>
            </v-col>
          </v-row>
            <v-btn
              color="success"
              @click="completeOrder"
            >Submit Order</v-btn>
        </v-form>
      </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
  props:{
    selected: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      widthCol1: '12',
      widthCol2: '0',
      deliveryFlag: false,
      checkoutFormFlag: false,
      loading: false,
      token: null,
      charge: null,
      order: {
        flag: false,
        selections: false,
        fName: '',
        lName: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        apt: '',
        phone: '',
        email: '',
        message: '',
        id: ''
      },
      payment: {
        charge: '1',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        apt: ''

      }
    }
  },
  computed: {
    orderTotal(){
      let total = 0
      this.selected.forEach(sel=>{
        total += sel.price
      })
      return total;
    },
    orderTax(){
      return 1*0.07775;
    },
    totalWithTax(){
      return 1.0775;
    }
  },
  methods: {
    submitOrder(){
      this.checkoutFormFlag = true
    },
    async completeOrder(){
      let order = ""
      let i
      let j
      this.selected.forEach(sel =>{
        console.log(sel.choice)
        order += " "+sel.name
        if(sel.choice != null){
          order += " w/ "
          for(i=0;i<sel.choice.length;i++){
            if(sel.choice.choices != null){
              console.log(sel.choice.choices)
                for(j=0;j<sel.choice[i].choices.length;j++){
                  order += sel.choice[i].choices[j].name + ", "
                }
            }
          }
        }
      })
      console.log(order)
      order += "$" + (this.orderTotal/100)
      console.log(order)
      const message = {
        phone: "+1"+this.order.phone,
        message: order
      }
      try {
        console.log('final order1',message)
        const response = await this.$axios.post("http://localhost:9001/twilio", message)
        console.log(response)
      }catch(err){
        console.log('final order2',message)
        console.log(err,"hh")
      }
    }
  }
}
</script>

<style scoped>
#col1{
  border: 1px solid black;
  background-color: white;
}
#col2{
  padding: 30px;
}
#col2-div{
  background-color: white;
  border-radius: 8px;
}
#form{
  padding: 15px;
}
</style>
