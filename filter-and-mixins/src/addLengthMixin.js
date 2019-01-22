export const addLengthMixin = {
    data () {
      return {
        textEx04: 'Count Length by using mixin',
      };
    },
    computed: {
      addLengthMixin () {
        return this.textEx04 + " (" +  this.textEx04.length + ")";        
      }
    }
};