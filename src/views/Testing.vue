<template>
  <h1>Midterm Project</h1>
  <h1>Brian B. Jariel</h1>
  
  <v-list-item
        v-for="mythology in questions "
        :key="mythology.id"
      >
        <v-list-item>
            <p>Category: {{mythology.category}}</p>
            <p>Question: {{mythology.question}}</p>
            <p>Answers: 
            <v-btn>{{mythology.correct_answer}}</v-btn>
            <v-btn>{{mythology.incorrect_answers[0]}}</v-btn>
            <v-btn>{{mythology.incorrect_answers[1]}}</v-btn>
            <v-btn>{{mythology.incorrect_answers[2]}}</v-btn>
            </p>
            
         </v-list-item>        
          <v-list-item>
            <p>Category: {{mythology.category}}</p>
            <p>Question: {{mythology.question}}</p>
            <p>Answers: 
            <v-btn>{{mythology.correct_answer}}</v-btn>
            <v-btn>{{mythology.incorrect_answers[0]}}</v-btn>
            <v-btn>{{mythology.incorrect_answers[1]}}</v-btn>
            <v-btn>{{mythology.incorrect_answers[2]}}</v-btn>
            </p>
            <v-radio-group inline label={{mythology.question}} >
              <v-radio label="Radio 1" value="1">{{mythology.correct_answer}}</v-radio>
              <v-radio label="Radio 2" value="2"></v-radio>
              <v-radio label="Radio 3" value="3"></v-radio>
              <v-radio label="Radio 3" value="4"></v-radio>
            </v-radio-group>
         </v-list-item>
        
  </v-list-item>
  
    
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'

const questions=ref([])
const Nba=ref([])
const Answers=ref([])

async function getQuestions () {
     axios.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple')
     .then( response => {
     questions.value=(response.data.results)
     console.log(questions.value)
    })
    
}

async function getNba () {
     axios({
              method:'get',
              url:'https://free-nba.p.rapidapi.com/players', 
              headers: {
                        'X-RapidAPI-Key': '98f6fb439cmshd3996bb397e7a78p10d6b4jsn77e5c24030d0',
                        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
                      }  
          }).then( response => {
     Nba.value=(response.data.data)
     console.log(Nba.value)
    })

}


 onMounted( async () => {
     await getQuestions()
 })
 onMounted( async () => {
     await getNba()
 })


</script>

