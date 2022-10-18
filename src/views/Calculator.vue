<template>
    <v-container>
        <h1>Calculator</h1>
        <v-text-field lable="First Number" v-model.number="num1"></v-text-field>
        <v-text-field lable="Second Number" v-model.number="num2"></v-text-field>

        <v-btn
        elevation="2" 
        depressed color="primary"
        @click="compute">Compute</v-btn>

        <br>
        <v-divider></v-divider>

        <p>Sum: {{ sum }}</p>
        <p>Difference: {{ difference }}</p>
        <p>Product: {{ product }}</p>
        <p>Quotient: {{ quotient }}</p>
        <p>Average: {{ average }}</p>
    </v-container>
</template>

<script setup>
    import {ref} from 'vue'

    const num1=ref(0)
    const num2=ref(0)
    const sum=ref(0)
    const difference=ref(0)
    const product=ref(0)
    const quotient=ref(0)
    const average=ref(0)

    function compute(){
        sum.value = num1.value + num2.value
        difference.value = num1.value - num2.value
        product.value = num1.value * num2.value
        quotient.value = num1.value / num2.value
        average.value = (num1.value + num2.value) /2
    }
</script>