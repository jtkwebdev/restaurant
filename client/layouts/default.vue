<template>
    <div>
        <v-app id="app-background">
            <v-app-bar id="bar" app>
              <NuxtLink to="/">Fid's</NuxtLink>
                <v-btn href="/">Fid's</v-btn>
            </v-app-bar>
            <v-main app>
                <v-container fluid>
                        <Nuxt/>
                </v-container>
            </v-main>
         <!--   <v-footer app>
                <p>Fiddle's Green, 2700 Shelter Island Dr, San Diego, CA, 92106 United States of America
                619-222-2216 fidsgreencatering@gmail.com</p>
            </v-footer>  -->
        </v-app>
    </div>
</template>