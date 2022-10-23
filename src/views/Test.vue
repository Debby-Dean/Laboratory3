<script setup>
import {ref, computed} from 'vue'

const questions = ref([
    {
        question: 'What is Vue?',
	    answer: 0,
	    options: [
		    'A framework',
		    'A library',
		    'A type of hat'
	    ],
	    selected: null
    },
    {
	    question: 'What is Vuex used for?',
	    answer: 2,
	    options: [
		    'Eating a delicious snack',
		    'Viewing things',
		    'State management'
	    ],
	    selected: null
    },
    {
	    question: 'What is Vue Router?',
	    answer: 1,
	    options: [
		    'An ice cream maker',
		    'A routing library for Vue',
		    'Burger sauce'
	    ],
	    selected: null
    }
])


const quizCompleted = ref(false)
const currentQuestion = ref(0)

async function getQuestions () {
     axios.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple')
     .then( response => {
     questions.value=(response.data.results)
     console.log(questions.value)
    })
}



const score = computed (() => {
    let value = 0
    questions.value.map(q => {
        if (q.selected == q.Answer) {
            value++
        }
    })
    return value
})

const getCurrentQuestion = computed (() => {
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question
})

const SetAnswer = evt => {
    questions.value[currentQuestion.value].selected = evt.target.value
    evt.target.value = null
}

const NextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1){
        currentQuestion.value++
    } else {
        quizCompleted.value = true
    }
}

</script>

<template>

<v-list-item
        v-for="mythology in questions "
        :key="mythology.id"
      >
        <v-list-item>
            <p>Category: {{mythology.category}}</p>
            <p>Question: {{mythology.question}}</p>
            <p>Answers:
                <v-btn>{{mythology.options[0]}}</v-btn>
                <v-btn>{{mythology.options[1]}}</v-btn>
                <v-btn>{{mythology.options[2]}}</v-btn>
            </p>
            
         </v-list-item>        
          <v-list-item>
         </v-list-item>
        
  </v-list-item>

    <main class="app">
        <h1>The Quiz</h1>
        <section class="quiz" v-if="!quizCompleted">
            <div class="quiz-info">
                <span class="question">{{getCurrentQuestion.question}}</span>
                <span class="score">Score {{score}}/{{questions.length}}</span>
            </div>

            <div class="options">
                <label v-for="(option, index) in getCurrentQuestion.options" 
                :key="'option' + index"
                :class="`option ${
                    getCurrentQuestion.selected == index
                        ? index == getCurrentQuestion.answer
                                ? 'correct'
                                : 'wrong'
                        : ''
                } ${
                    getCurrentQuestion.selected != null && 
                    index != getCurrentQuestion.selected
                            ? 'disabled'
                            : ''
                }`">
                <input 
                        type="radio" 
                        :id="'option' + index"
                        :name="getCurrentQuestion.index" 
                        :value="index"
                        v-model="getCurrentQuestion.selected"
                        :disabled="getCurrentQuestion.selected"
                        @change="SetAnswer"/>
                        <span>{{option}}</span>
                </label>
            </div>
            <button
                @click="NextQuestion"
                :disabled="!getCurrentQuestion.selected">
                {{
                    getCurrentQuestion.index == questions.length - 1
                        ? 'Finish'
                        : getCurrentQuestion.selected == null
                            ? 'Select an option'
                            : 'Next Question'
                }}
            </button>
        </section>

        <section v-else>
            <h2>You have finished the quiz!</h2>
            <p>Your score is {{score}} / {{questions.length}}</p>
        </section>
    </main>
</template>

<style>
.Test{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

.app{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
}

h1{
    font-size: 2rem;
    margin-bottom: 2rem;
}

.quiz{
    background-color: #382a4b;
    color:#FFF;
    padding: 1rem;
    width: 100%;
    max-width: 640px;
    border-radius: 0.5rem;
}

.quiz-info{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.quiz-info .question{
    color: #cecece;
    font-size: 1.25rem;
}

.quiz-info .score {
    color: #FFF;
    font-size: 1.25rem;
}

.options {
    margin-bottom: 1rem;
}

.option{
    display: block;
    padding: 1rem;
    background-color: #271c36;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

.option:hover {
    background-color: #2d213f;
}

.option:last-of-type {
    margin-bottom: 0;
}

.option.disabled {
    opacity: 0.5;
}

.option input {
    display: none;
}

button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #2cce7d;
    color: #2d213f;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.25rem;
    border-radius: 0.5rem;
}

button:disabled {
    opacity: 0.5;
}

h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

p {
    font-size: 1.25rem;
    text-align: center;
}
</style>