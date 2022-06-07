<template>
  <div class="header">
    <div class="logo">
      <a
        href="https://4everland.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/logo.svg" alt="" />
      </a>
    </div>
    <div class="menu">
      <el-dropdown trigger="click" placement="bottom">
        <img src="@/assets/menu.svg" alt="" />
        <el-dropdown-menu class="menu-dropdown" slot="dropdown">
          <el-dropdown-item v-for="item in links" :key="item.name">
            <a :href="item.link" target="_blank">
              {{ item.name }}
            </a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  box-sizing: border-box;
  padding: 0 1rem;

  .logo {
    text-align: left;
    width: 1.316rem;
    padding-top: 0.102rem;
    img {
      width: 100%;
    }
  }
  .menu {
    display: none;
  }
}
@media only screen and (max-width: 960px) {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.5rem;
    padding: 0 1rem;
    .logo {
      width: 4.493rem;
      height: 0.613rem;
      padding-top: 0;
      padding-left: 0;
    }
    .menu {
      display: block;
      width: 0.533rem;
      img {
        width: 100%;
      }
    }
  }
  .menu-dropdown {
    .el-dropdown-menu__item {
      text-align: center;
    }
    a {
      font-family: HPSimplified-Regular;
      font-size: 0.32rem;
      font-weight: normal;
      font-stretch: normal;
      color: #969290;
    }
  }
}
</style>
