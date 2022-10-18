<template>
    <h1>NBA Players</h1>
    <h1>Brian B. Jariel</h1>
    
    <v-list-item
          v-for="players in Nba "
          :key="players.id"
        >
          <v-list-item>
              <p>Full Name:</p>{{players.first_name}} {{players.last_name}}<p>Team: </p>{{players.team.full_name}}<p>Position:</p>{{players.position}}
           </v-list-item>        
            <v-list-item>
           </v-list-item>
          
    </v-list-item>
    
      
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

  const questions=ref([])
  const  Nba=ref([])

  async function getQuestions () {
       axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then( response => {
       questions.value=(response.data.results)
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

