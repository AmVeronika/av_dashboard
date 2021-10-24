export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
 hideModalWindow() {
   this.$emit('update:showModal', false)
    },
  },
};
