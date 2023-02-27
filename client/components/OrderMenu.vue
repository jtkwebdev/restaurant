<template>
  <div id="section-component">
            <v-navigation-drawer
                id="nav-drawer"
                app
                v-model="checkoutFlag"
                :expand-on-hover="hoverFlag"
                right
                width="33%"
                height="100%"
            >
                <CheckoutDrawer
                id="checkout"
                :selected="selections"
                />
            </v-navigation-drawer>
      <div v-if="todaysMenu(menus)">
        <template v-if="modalFlag">
            <v-dialog
                v-model="modalFlag"
                width="65%"
                persistent
            >
                <SelectionModal
                    :selection="selection"
                    @getSelection="fromModal"
                />  
            </v-dialog>
       <!--     <template v-if="optionsFlag">
                <v-dialog>
                    <SelectionModal>
                </v-dialog>
            </template>   -->
        </template>
        <v-expansion-panels
            id="top"
            flat
            tile
        >
            <v-expansion-panel
                v-for="(section,i) in menuSections(todaysMenu(menus).sections)"
                id="ex-panel"
                :key="i"
            >
                <v-expansion-panel-header
                    id="panel-head"
                    v-slot="{ open }"
                    expand-icon=""
                >
                    <v-toolbar id="ex-panel-head">
                        <v-row>
                            <v-col id="sec-name" cols="3" class="pl-12">
                                <strong>
                                    {{section.name}}
                                </strong>
                            </v-col>
                            <v-col id="description" cols="9">
                                <v-fade-transition leave-absolute mode="out-in">
                                    <span v-show="open">
                                        i forgot to add descriptions to the section data
                                    </span>
                                </v-fade-transition>

                            </v-col>
                        </v-row>
                    </v-toolbar>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <OrderItem
                        :theItems="sectionItems(section)"
                        @passToMenu="fromItem"
                    />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div v-else>
          <p>Sorry the restaurant is closed</p>
      </div>
  </div>
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
        return{
            hoverFlag: true,
            checkoutFlag: false,
            selections: [],
            selection: {
                name: null,
            },
            modalFlag: false,
           // optionsFlag: false
        }
    },
    methods:{
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
        },
        sectionItems(section){
            const items = []
            this.items.forEach(item =>{
                if(section._id === item.section_id){
                    item.section = section
                    items.push(item)
                }
            })
            return items
        },
        todaysMenu: (menus) => {
          /**
            const date = new Date()
            const today = date.getDay()
            const nowHours = date.getHours()
            const nowMins = date.getMinutes()
            menus.forEach( (menu) => {
                if(menu.days.includes(today)){
                    const startHours = Math.floor(menu.starttime/100)
                    if(nowHours > startHours){
                        const endHours = Math.floor(menu.endtime/100)
                        if(nowHours < endHours){
                            console.log(menu)
                            return menu
                        }
                    }
                    else if ( nowHours === startHours){
                        const startMins = menu.starttime % 100
                        if( nowMins >= startMins){
                            console.log(menu)
                            return menu
                        }
                    }
                    else {console.log("not open")}
                }
            })
            */
           return menus[1]
        },
        fromItem(selection){
            const sel = selection
            if(sel.options){
                const allOps = []
                let i
                let j
                const allIngr = this.ingredients
                for(i=0;i<sel.options.length;i++){
                    this.sections.forEach(sec => {
                        if(sec._id === sel.options[i]){
                            sel.options[i] = sec
                        }
                    })
                    allOps.push({
                        option: sel.options[i],
                        ingr: []
                    })    
                    if(sel.choice){
                        sel.choice.push({
                            option: sel.options[i],
                            choices: []
                        })
                    }
                    else{
                        sel.choice = []
                        sel.choice.push({
                            option: sel.options[i],
                            choices: []
                        })
                    }          
                    for(j=0;j<allIngr.length;j++){
                        if(allIngr[j].section_id===sel.options[i]._id){
                            allOps[i].ingr.push(allIngr[j])
                        }
                    }
                }
                sel.optionsMenu = allOps
                delete sel.options
                this.selection = sel
                this.modalFlag=true

            }
        },
        fromModal(sel){
            if(sel != null){
                let i;
                let j;
                let k;
                console.log("sel", sel)
/********************************************************
                if(sel.choice != null){
                    for(i=0;i<sel.choice.length;i++){
                        if(sel.choice.choices != null){
                            for(j=0;j<sel.choice[i].choices.length;j++){
                                if(sel.choice[i].choices[j].options != null){
                                    for(k=0;k<sel.choice[i].choices[j].options.length;k++){

                                    }
                                }
                            }
                        }
                    }
                } 
***************************************************************/
                
                this.selections.push(sel)
            }
            this.modalFlag=false
            if(this.selections.length > 0){
                this.checkoutFlag = true;
            }
        }
    }
}
</script>
<style scoped>
#ex-panel{
    box-shadow: none;
    border: none;
    -webkit-box-shadow: none;
}
#sec-name{
    position: relative;
}
#ex-panel-head{
    background-size: 100%;
    background-position: 0 -250px;
    font-family: "Palatino Linotype";
    font-size: 25px;
}
#description{
    font-size: 16px;
    padding-bottom: 20px;
}
#section-component{
    background-size: 100%;
}
</style>