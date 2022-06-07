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
            <!-- <button class="paste" @click="paste">Paste</button> -->
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
  padding: 0.3906rem 0;
  background: linear-gradient(-30deg, #dbe7ff, #ffece0);
  box-sizing: border-box;
  .container {
    max-width: 4.6875rem;
    margin: 0 auto;
    padding: 0 10px;
  }
  .main {
    .title {
      font-family: Arial-BoldMT;
      font-size: 0.3516rem;
    }
    .enter-box {
      width: 100%;
      display: flex;
      margin: 0 auto;
      margin-top: 0.793rem;
      border-radius: 3px;
      border: 1px solid #c990d1;
      overflow: hidden;
      button {
        height: 0.3438rem;
        border: none;
        outline: none;
        background: transparent;
        font-size: 0.1172rem;
        cursor: pointer;
      }
      .left {
        width: 3.2813rem;
        height: 0.3438rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding-left: 0.1289rem;
        box-sizing: border-box;
        .enter-input {
          width: 3.2813rem;
          border: none;
          outline: none;
          font-size: 0.1172rem;
        }
        .paste {
          color: #336de2;
        }
      }
      .enter {
        width: 1.4063rem;
        background-color: #c990d1;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 0.125rem;
          margin-left: 0.1328rem;
        }
      }
    }
    .tips-box {
      width: 100%;
      height: 0.25rem;
      line-height: 0.25rem;
      margin-top: 0.1445rem;
      text-align: left;
      background: rgba(213, 222, 255, 0.6);
      border-radius: 3px;
      color: #abb3d0;
      font-size: 0.0938rem;
      padding: 0 0.1328rem;
      box-sizing: border-box;
    }
  }
}

@media only screen and (max-width: 960px) {
  .home {
    padding: 1.5rem 0;
    .container {
      max-width: 8rem;
    }
    .main {
      .title {
        font-size: 0.8rem;
        margin-top: 2.6rem;
      }
      .enter-box {
        // display: none;
        display: block;
        border: none;
        margin-top: 1.907rem;
        .left {
          width: 8rem;
          height: 1.173rem;
          background-color: #ffffff;
          border-radius: 3px;
          border: 1px solid #c990d1;
          overflow: hidden;
          .enter-input {
            width: 100%;
            border: none;
            outline: none;
            font-size: 0.4rem;
          }
        }
        .enter {
          width: 4.8rem;
          height: 1.173rem;
          border-radius: 3px;
          font-size: 0.4rem;
          margin: 0 auto;
          margin-top: 0.547rem;
          img {
            width: 0.427rem;
            margin-left: 0.453rem;
          }
        }
      }
      .tips-box {
        display: none;
      }
    }
  }
}
</style>
