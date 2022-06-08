<template>
  <div class="footer">
    <div class="copy-right">
      @ 2022
      <a href="https://4everland.org/" target="_blank" rel="noopener noreferrer"
        >4EVERLAND</a
      >
    </div>
    <div class="link-box">
      <span v-for="item in links" :key="item.name" class="link-span">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">{{
          item.name
        }}</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: "4EVERLAND GATEWAY",
          link: "https://4everland.org/ipfs",
        },
        {
          name: "DOCS",
          link: "https://docs.4everland.org/",
        },
        {
          name: "IPFS",
          link: "https://ipfs.io/",
        },
        {
          name: "HOSTING",
          link: "https://dashboard.4everland.org/#/hosting/projects",
        },
        {
          name: "BUCKET",
          link: "https://dashboard.4everland.org/#/bucket/storage/",
        },
        {
          name: "COMMUNITY",
          link: "https://discord.com/invite/Cun2VpsdjF",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 100px;
  color: #b1b6bb;
  font-size: 16px;
  .copy-right {
    margin-bottom: 40px;
  }
  .link-span {
    border-right: 1px solid #b1b6bb;
    padding: 0 20px;
  }
  .link-span:last-child {
    border: none;
  }
  a {
    color: #b1b6bb;
  }
  a:hover {
    color: #666;
  }
}
@media only screen and (max-width: 960px) {
  .footer {
    font-size: 0.32rem;
    height: 1rem;
    margin-top: 7.28rem;
    .copy-right {
      margin-bottom: 0;
    }
  }
  .link-box {
    display: none;
  }
}
</style>
