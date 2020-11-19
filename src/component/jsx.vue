<script>
export default {
  name: "item",
  props: {
    id: {
      type: Number,
      default: 1
    },
    add:{
      type:Function,
      default(){
        return function(){}
      }
    }
  },
  data() {
    return {
      a: 0,
      list: ["t","d"]
    };
  },
  methods: {
    p(num){
      this.$emit("test", num)
      this.$parent.test2()
    }
  },
  render() {
    return (
      <div class="id">
        <p onClick={this.add}>{this.id}</p>
        <p onClick={() => this.p(1)}>{this.id}</p>
        <div>
          {this.list.map(i => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </div>
    );
  }
};
</script>

<style lang="less">
.id {
  font-size: 20px;
  color: red;
}
</style>
