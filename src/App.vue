<template>
  <div>
    <h1>{{ title }}</h1>

    <ul>
      <li :class="posts[0].checked ? 'checked' : ''">
        <img :src="require(`@/assets/images/${posts[0].icon}`)" :alt="posts[0].icon" />
        <span>{{ posts[0].text }}</span>
      </li>
      <li class="list-item" :class="posts[1].checked ? 'checked' : ''">
        <img :src="require(`@/assets/images/${posts[1].icon}`)" :alt="posts[1].icon" />
        <span>{{ posts[1].text }}</span>
      </li>
<!--      <li>-->
<!--        <img :src="require(`@/assets/images/${posts[2].icon}`)" :alt="posts[2].icon" />-->
<!--        <span>{{ posts[2].text }}</span>-->
<!--      </li>-->
    </ul>

    <span class="total">Всего строк: {{ totalCount }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Data, Computed',
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
        // {
        //   id: 2,
        //   text: 'Текст третий',
        //   icon: 'phone.png'
        // },
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
