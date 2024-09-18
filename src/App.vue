<template>
  <div>
    <h1>{{ title }}</h1>

    <ul>
      <list-item
          :text="posts[0].text"
          :icon="posts[0].icon"
      />
      <list-item
          :text="posts[1].text"
          :icon="posts[1].icon"
      />
      <list-item
          :text="posts[2].text"
          :icon="posts[2].icon"
      />
    </ul>

    <span class="total">Всего строк: {{ totalCount }}</span>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: {ListItem},
  data() {
    return {
      title: 'Props',
      posts: [
        {
          id: 0,
          text: 'Текст первый',
          icon: 'setting.png',
          checked: true
        },
        {
          id: 1,
          text: 'Текст второй',
          icon: 'user.png',
          checked: true
        },
        {
          id: 2,
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
