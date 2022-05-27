<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <h1 class="title">IPFS GATEWAY</h1>
        <div class="enter-box">
          <div class="left">
            <input
              id="output"
              class="enter-input"
              type="text"
              placeholder="Please enter a IPFS Hash"
              v-model="cid"
            />
            <button class="paste" @click="paste">Paste</button>
          </div>
          <button class="enter" @click="enter">
            <span>Enter</span>
            <img src="@/assets/enter.png" alt="" />
          </button>
        </div>
        <div class="tips-box">
          In pursuit of the better experience, you can switch to dedicated
          gateway.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const CID = require("cids");
export default {
  name: "Home",
  data() {
    return {
      cid: "",
    };
  },
  methods: {
    async paste() {
      const text = await navigator.clipboard.readText();
      this.cid = text;
    },
    enter() {
      let cid;
      try {
        cid = new CID(this.cid);
      } catch (e) {
        console.log(e);
      }
      if (!CID.isCID(cid)) {
        this.$message.error("Your IPFS hash is incorrect, please enter again.");
        return;
      }
      let url = "https://4everland.io/ipfs/" + this.cid;
      window.open(url);
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  padding: 100px 0;
  background: linear-gradient(-30deg, #dbe7ff, #ffece0);
  box-sizing: border-box;
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
  }
  .main {
    .title {
      font-size: 50px;
    }
    .enter-box {
      width: 100%;
      display: flex;
      margin-top: 100px;
      border-radius: 3px;
      border: 1px solid #c990d1;
      overflow: hidden;
      button {
        height: 50px;
        border: none;
        outline: none;
        background: transparent;
        font-size: 18px;
        cursor: pointer;
      }
      .left {
        width: 80%;
        height: 50px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
        padding-right: 42px;
        box-sizing: border-box;
        .enter-input {
          width: 80%;
          border: none;
          outline: none;
          font-size: 18px;
        }
        .paste {
          color: #336de2;
        }
      }
      .enter {
        width: 20%;
        background-color: #c990d1;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 18px;
          margin-left: 20px;
        }
      }
    }
    .tips-box {
      width: 100%;
      height: 36px;
      line-height: 36px;
      margin-top: 25px;
      text-align: left;
      background: rgba(213, 222, 255, 0.6);
      border-radius: 3px;
      color: #abb3d0;
      font-size: 14px;
      padding: 0 25px;
      box-sizing: border-box;
    }
  }
}
</style>
