<template>
  <div>
    <h1>Marvel API</h1>
    
    <div class="row">
    <button class='col col-6' @click="previousPage" :disabled="!leftPage">Anterior</button>
    <button class='col col-6' @click="nextPage">Siguiente</button>
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
        class='col col-4'
      ></CharacterCard>
    </div>
  </div>
</template>

<script>
import CharactersService from "../../services";
import CharacterCard from "./SuperHeroDetail";
export default {
  name: "Characters",
  components:{CharacterCard},
  data() {
    return {
      characters: [],
      responseData: [],
    };
  },
  computed: {
    leftPage(){
      return this.responseData.offset > 0;
    },
    rightPage(){
      return this.responseData.offset + this.responseData.limit < this.responseData.total;
    },
  },
  methods: {
    async previousPage() {
      if (this.leftPage){
        await this.getCharacters(this.responseData.offset - this.responseData.limit);
      }
    },
    async nextPage() {
      if(this.rightPage){
        await this.getCharacters(this.responseData.offset + this.responseData.limit);
      }
    },
    async getCharacters(offset){
      let response = await CharactersService.getCharacters(offset);
      this.responseData = response.data.data;
      this.characters = response.data.data.results;
    }
  },
  async mounted() {
    try {
      console.log("characters list");
      await this.getCharacters(0);
      console.log("Fin characters list");
    } catch (error) {
      console.log(error.log);
    } finally {
      //
    }
  },
};
</script>

<style lang="scss" scoped>
</style>