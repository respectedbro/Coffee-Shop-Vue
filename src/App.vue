<template>
  <div>
<!--    <h1 v-if="isDirectives"> Тема урока: Directives</h1>-->
<!--    <h1 v-else> Тема урока: {{ title }}</h1>-->
    <h1 v-show="isDirectives"> Тема урока: Directives</h1>
    <h1 v-show="!isDirectives"> Тема урока: {{ title }}</h1>
    <ul>
      <list-item
          v-for="post in posts"
          :key="post.id"
          :text="post.text"
          :icon="post.icon"
      >
        <template v-slot:pretext>
          <span>pretext</span>
        </template>


        <span>some text</span>
      </list-item>
    </ul>

    <span class="total">Всего строк: {{ totalCount }}</span>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

import { v4 as uuidv4 } from 'uuid';

export default {
  components: {ListItem},
  data() {
    return {
      title: 'Props',
      isDirectives: true,
      posts: [
        {
          id: uuidv4(),
          text: 'Текст первый',
          icon: 'setting.png',
          checked: true
        },
        {
          id: uuidv4(),
          text: 'Текст второй',
          icon: 'user.png',
          checked: true
        },
        {
          id: uuidv4(),
          text: 'Текст третий',
          icon: 'phone.png'
        },
      ]
    }
  },
  computed: {
    totalCount() {
      return this.posts.length + 'шт'
    }
  }
};
</script>

<style>
ul {
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      margin-right: 10px;
    }

    &:hover {
      color: red;
    }

    &.checked {
      color: red;
    }
  }
}

.total {
  padding-left: 40px;
}
</style>
