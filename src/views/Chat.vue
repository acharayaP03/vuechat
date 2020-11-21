<template>
  <div class="chat container">
    <h2>Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll="{ always: true, smooth: true }">
          <li v-for="msg in messages" :key="msg.id">
            <span class="teal-text">{{ msg.name }}</span>
            <span class="grey-text text-darken-3">{{ msg.content }}</span>
            <span class="grey-text time">{{ msg.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage.vue";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage,
  },
  created() {
    let ref = db.collection("message").orderBy("timestamp");

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
  },
  data() {
    return {
      messages: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.chat {
  & h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  & span {
    font-size: 1.4em;
  }

  & .time {
    display: block;
    font-size: 1em;
  }
}

li span:first-child {
  margin-right: 5px;
}

.messages {
  max-height: 300px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
  }
}
</style>
