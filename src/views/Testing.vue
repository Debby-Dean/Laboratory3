<template>
    <h1>Axios Demo</h1>
    <v-list-item
          v-for="question in questions "
          :key="question.id"
        >
          <v-list-item-title>{{ question.question }}</v-list-item-title>
          <v-list-item>
              {{question.correct_answer}}   
           </v-list-item>        
            <v-list-item>
              {{question.incorrect_answers}}
           </v-list-item>
          
    </v-list-item>
    <p>{{covidData.confirmed}} </p>
    
      
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

  const questions=ref([])
  const  covidData=ref([])

  async function getQuestions () {
       axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then( response => {
       questions.value=(response.data.results)
      })
  
  }   
  async function getCovidData () {
       axios({
                method:'get',
                url:'https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07', 
                params: {'date':'2020-04-07'},
                headers: {
                          'X-RapidAPI-Key': '4c186b7a46mshf063d58f43917bdp1f2520jsn3bbce8af21d6',
                          'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
                        }  
            }).then( response => {
       covidData.value=(response.data.data)
       console.log(covidData.value)
      })
  
  }


   onMounted( async () => {
       await getQuestions()
   })
   onMounted( async () => {
       await getCovidData()
   })

  
</script>

