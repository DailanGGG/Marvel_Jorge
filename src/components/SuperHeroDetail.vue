<template>
  <div style="border: solid">
    <p><img :src="urlImage"/></p>
    <p><b>ID: </b> {{ character.id }}</p>
    <p><b>Name: </b>{{ character.name }}</p>
    <p><b>Description: </b>{{ character.description }}</p>
    <p><b>Modified: </b>{{ character.modified }}</p>
    <p><b>Thumbnail:</b>
      <b>Path: </b>{{ character.thumbnail.path }}
      <b>Extension: </b> {{character.thumbnail.extension}}
    </p>
  </div>
</template>

<script>
export default {
  props: ["character"],
  computed: {
    urlImage() {
      return this.character.thumbnail.path + "/standard_medium." +  this.character.thumbnail.extension;
    },
  },
  data() {
    return {};
  },
  methods: {
    URLImage: function (path, extension) {
      return path + "/portrait_medium" + extension;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>