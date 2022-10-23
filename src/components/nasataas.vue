<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Vuetify </span>
        <span>Demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
      <v-list-item class="px-2">
            <v-list-item-content>
                <v-list-item-title class="text-h6 text-center" >Brian B. Jariel</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'About', icon: 'mdi-account', path: '/about' },
           { title: 'Calculator', icon: 'mdi-abacus', path: '/calcu' },
           { title: 'String Manipulator', icon: 'mdi-ab-testing', path: '/string'},
           { title: 'Axios', icon: 'mdi-abacus', path: '/axios' },
           { title: 'Midterm', icon: 'mdi-abacus', path: '/midterm' },
           { title: 'Testing', icon: 'mdi-abacus', path: '/testing' },
           { title: 'Test', icon: 'mdi-abacus', path: '/test' },
           { title: 'shapes', icon: 'mdi-abacus', path: '/shapes' },
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>
