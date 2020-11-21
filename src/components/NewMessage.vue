<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add message):</label>
      <input type="text" name="new-message" v-model="newMessage" autocomplete="off" />
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        //save it to the firebase
        db.collection("message")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((e) => {
            console.log(e);
          });

        //clear the input message field
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "No new message to send.";
      }
    },
  },
};
</script>
