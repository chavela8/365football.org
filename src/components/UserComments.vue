<template>
  <div class="user-comments">
    <h3>Комментарии пользователей</h3>
    <form @submit.prevent="addComment" class="comment-form">
      <textarea v-model="newComment" placeholder="Оставьте комментарий..." required></textarea>
      <button type="submit">Отправить</button>
    </form>
    <transition-group name="list" tag="div" class="comments-list">
      <div class="comment-item" v-for="(comment, index) in comments" :key="comment.id">
        <strong>{{ comment.author }}</strong>
        <p>{{ comment.content }}</p>
        <small>{{ comment.date }}</small>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "UserComments",
  data() {
    return {
      newComment: "",
      comments: [
        // Пример начальных комментариев – на практике они загружаются с API
        { id: 1, author: "Иван", content: "Отличный анализ!", date: "2023-10-01" },
        { id: 2, author: "Мария", content: "Полезная статистика, спасибо!", date: "2023-10-02" }
      ]
    };
  },
  methods: {
    addComment() {
      const newEntry = {
        id: Date.now(),
        author: "Аноним", // В реальном проекте – данные пользователя
        content: this.newComment,
        date: new Date().toLocaleDateString()
      };
      this.comments.unshift(newEntry);
      this.newComment = "";
    }
  }
};
</script>

<style scoped>
.user-comments {
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}
.comment-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.comment-form textarea {
  resize: vertical;
  min-height: 60px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: border-color 0.3s;
}
.comment-form textarea:focus {
  border-color: #3e95cd;
  outline: none;
}
.comment-form button {
  align-self: flex-end;
  background-color: #3e95cd;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.comment-form button:hover {
  background-color: #337ab7;
}
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.comment-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.comment-item strong {
  display: block;
  margin-bottom: 5px;
}
</style>