

<template>
    <v-container fluid>
      <h1>This Vue Page compute for the Area of ReCircle and Triangle</h1>
      <br><br>
        <h3>Select a Shape of your Choice: </h3>
      <br>
          <h2>1. Rectangle</h2>
          <h2>2. Square</h2>
          <h2>3. Circle</h2>
          <h2>4. Triangle</h2>
      <br><br>
    
      <v-text-field type="number" v-model.number="Choice" label="Enter your Choice:"></v-text-field>
    
      <div v-if="Choice === 1">
        <br><br>
        <h1>Rectangle</h1>
        <v-image src="https://pngimg.com/uploads/square/square_PNG22.png"></v-image>
          <v-text-field name="base" v-model.number="base" label="Enter the base of Rectangle"></v-text-field>
          <v-text-field name="height" v-model.number="height" label="Enter the height of Rectangle"></v-text-field>
    
          <v-btn @click="doRectangle">Check</v-btn>
          <br><br>
          <p>Result of Area of Rectangle:</p>{{AreaOfRectangle}}
      </div>
    
      <div v-if="Choice === 2">
        <br><br>
        <h1>Square</h1>
          <v-text-field name="side" v-model.number="side" label="Enter the side of Square"></v-text-field>
          
          <v-btn @click="doSquare">Check</v-btn>
          <br><br>
          <p>Result of Area of Square:</p>{{AreaOfSquare}}
      </div>
    
      <div v-if="Choice === 3">
        <br><br>
        <h1>Circle</h1>
          <v-text-field name="radius" v-model.number="radius" label="Enter the radius of Circle"></v-text-field>
    
          <v-btn @click="doCircle">Check</v-btn>
          <br><br>
          <p>Result of Area of Circle:</p>{{AreaOfCircle}}
      </div>
    
      <div v-if="Choice === 4">
        <br><br>
        <h1>Triangle</h1>
          <v-text-field name="base" v-model.number="base" label="Enter the base of Triangle"></v-text-field>
          <v-text-field name="height" v-model.number="height" label="Enter the height of Triangle"></v-text-field>
    
          <v-btn @click="doTriangle">Check</v-btn>
          <br><br>
          <p>Result of Area of Triangle:</p>{{AreaOfTriangle}}
      </div>
    
    </v-container>
     </template>
    
    <script setup>
      import {ref} from 'vue'
      
      const AreaOfRectangle=ref(0)
      const AreaOfSquare=ref(0)
      const AreaOfCircle=ref(0)
      const AreaOfTriangle=ref(0)
      const base=ref(0)
      const height=ref(0)
      const radius=ref(0)
      const side=ref(0)
      const Choice = ref(false)
      
      function doRectangle(){
        return AreaOfRectangle.value=base.value*height.value
      }
      function doSquare(){
        return AreaOfSquare.value=side.value*side.value
      }
      function doCircle(){
        return AreaOfCircle.value=3.1416 * (radius.value * radius.value)
      }
      function doTriangle(){
        return AreaOfTriangle.value=(base.value*height.value)/2
      }
    </script>
    
    
    