<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="title">IPFS GATEWAY</div>
        <div class="enter-box">
          <div class="left">
            <input
              id="output"
              class="enter-input"
              type="text"
              placeholder="IPFS Hash"
              v-model="cid"
              @keyup.enter="enter"
            />
            <!-- <button class="paste" @click="paste">Paste</button> -->
          </div>
          <button class="enter" @click="enter">
            <span>Browse</span>
            <img src="@/assets/enter.png" alt="" />
          </button>
        </div>
        <div class="tips-box">
          Switch to a dedicated gateway for a better experience.
          <img src="@/assets/right.svg" alt="" @click="ipfsGateway" />
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
    ipfsGateway() {
      window.open("https://4everland.org/ipfs");
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  .container {
    margin-bottom: 200px;
    .main {
      .title {
        color: #132642;
        font-family: PARaDOS;
        font-size: 60px;
        margin: 0;
      }
      .enter-box {
        width: 730px;
        display: flex;
        margin: 0 auto;
        margin-top: 70px;
        border-radius: 50px;
        border: 1px solid #c990d1;
        overflow: hidden;
        button {
          height: 58px;
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.1172rem;
          cursor: pointer;
        }
        .left {
          width: 530px;
          height: 58px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          margin: 0 auto;
          .enter-input {
            width: 530px;
            border: none;
            outline: none;
            font-size: 24px;
            padding-left: 28px;
          }
          input::-webkit-input-placeholder {
            /* WebKit, Blink, Edge */
            color: #999999;
            font-family: HPSimplifiedHansLight;
          }

          :-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #999999;
            font-family: HPSimplifiedHansLight;
          }
          ::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #999999;
            font-family: HPSimplifiedHansLight;
          }

          input:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #999999;
            font-family: HPSimplifiedHansLight;
          }

          input::-ms-input-placeholder {
            /* Microsoft Edge */
            color: #999999;
            font-family: HPSimplifiedHansLight;
          }
          .paste {
            color: #336de2;
          }
        }
        .enter {
          font-family: HPSimplifiedHansLight;
          width: 200px;
          background-color: #c990d1;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          img {
            width: 24px;
            margin-left: 24px;
          }
        }
        .enter:hover {
          background-color: #f09efc;
        }
      }
      .tips-box {
        width: 730px;
        height: 58px;
        line-height: 58px;
        margin: 0 auto;
        margin-top: 28px;
        text-align: left;
        background: rgba(213, 222, 255, 0.6);
        border-radius: 3px;
        color: #7d88af;
        font-size: 16px;
        padding: 0 50px;
        box-sizing: border-box;
        border-radius: 50px;
        img {
          width: 24px;
          vertical-align: middle;
          cursor: pointer;
          margin-left: 30px;
        }
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .home {
    display: block;
    box-sizing: border-box;
    height: auto;
    .container {
      max-width: 100%;
      margin-bottom: 0;
      height: 100%;
      .main {
        height: auto;
        .title {
          font-size: 0.8rem;
          margin-top: 2.6rem;
        }
        .enter-box {
          width: auto;
          display: block;
          border: none;
          margin-top: 1.907rem;
          border-radius: 0;
          .left {
            width: 8rem;
            height: 1.173rem;
            background-color: #ffffff;
            border-radius: 50px;
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
            border-radius: 50px;
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
}
</style>
