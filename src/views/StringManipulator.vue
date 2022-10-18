<template>
  <v-container>
        <h1>String Manipulation</h1>
        <v-text-field 
        label="Input String" 
        hide-details="auto"
        v-model.text="str"></v-text-field>
        <v-btn 
        elevation="2" 
        depressed color="primary"
        @click="submit"
        block>Submit</v-btn>
        <br>
        <v-divider></v-divider>

        <p>String to uppercase: {{ string_uppercase }}</p>
        <p>Count all the vowels: {{ count_vowel }}</p>
        <p>Convert the vowel to * : {{ vowel_convert }}</p>
        <p>Takte: {{ consonant_uppercas }}</p>
        <p>Convert all the consonant to uppercase: {{ consonant_uppercase }}</p>
        <!-- <p>Count Number: {{ count_number }}</p>
        <p>Count Consonant: {{ count_consonant }}</p> -->
        
    </v-container>
</template>

<script setup>
    import {ref} from 'vue'

    const vowel_list=ref('aeiouAIEOU')
    const str=ref('')
    const string_uppercase=ref('')
    const count_vowel=ref(0)
    const vowel_convert=ref('')
    const consonant_uppercas=ref('')
    const consonant_uppercase=ref('')
    function submit(){
        string_uppercase.value = str.value.toUpperCase();
        count_vowel.value = str.value.match(/[aeiouAIEOU]/gi).length;
        vowel_convert.value = str.value.replace(/[aeiouAIEOU]/gi,"*");
        consonant_uppercas.value = str.value.match(/[^aeiouAIEOU]/gi);
        consonant_uppercase.value = str.value.replace==toUpperCase(/[^aeiouAIEOU]/gi);
    }
</script>