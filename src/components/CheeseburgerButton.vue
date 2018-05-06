<template>
  <button
  class="cheeseburger-button"
  :class="{ 'active': _active }"
  type="button"
  aria-label="Menu"
  aria-controls="navigation"
  :aria-expanded="active ? 'true' : 'false'"
  @click.prevent="onClick">
    <div class="con">
      <div class="bar bun"></div>
      <div class="bar lettuce"></div>
      <div class="bar tomato"></div>
      <div class="bar cheese"></div>
      <div class="bar meat"></div>
      <div class="bar bun"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'cheeseburger',
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  computed: {
    _active: {
      get () {
        return this.active
      },
      set (newValue) {
        this.$emit('update:active', newValue)
      }
    }
  },
  methods: {
    onClick (event) {
      this._active = !this.active
    }
  }
}
</script>

<style lang="scss">
// originally lifted from
// https://codepen.io/tonkec/pen/XXgdoo
//

@keyframes meat {
  0% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(0, 4px, 0);
  }

  50% {
    transform: translate3d(0, 2px, 0);
  }

  75% {
    transform: translate3d(0, 3px, 0);
  }

  100% {
    transform: translate3d(0, 2px, 0);
  }
}

@keyframes meat-reverse {
  100% {
    transform: translate3d(0, 0, 0);
  }

  // 75% {
  //   transform: translate3d(0, 4px, 0);
  // }
  //
  // 50% {
  //   transform: translate3d(0, 2px, 0);
  // }
  //
  // 25% {
  //   transform: translate3d(0, 3px, 0);
  // }

  0% {
    transform: translate3d(0, 2px, 0);
  }
}

@keyframes tomato {
  0% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  25% {
    transform: translate3d(0, 6px, 0) rotate(-1deg);
  }

  50% {
    transform: translate3d(0, 4px, 0) rotate(1deg);
  }

  75% {
    transform: translate3d(0, 5px, 0) rotate(2deg);
  }

  100% {
    transform: translate3d(0, 4px, 0) rotate(3deg);
  }
}

@keyframes tomato-reverse {
  100% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  // 75% {
  //   transform: translate3d(0, 6px, 0) rotate(-1deg);
  // }
  //
  // 50% {
  //   transform: translate3d(0, 4px, 0) rotate(1deg);
  // }
  //
  // 25% {
  //   transform: translate3d(0, 5px, 0) rotate(2deg);
  // }

  0% {
    transform: translate3d(0, 4px, 0) rotate(3deg);
  }
}

@keyframes lettuce {
  0% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  25% {
    transform: translate3d(0, 8px, 0) rotate(1deg);
  }

  50% {
    transform: translate3d(0, 6px, 0) rotate(-1deg);
  }

  75% {
    transform: translate3d(0, 7px, 0) rotate(-2deg);
  }

  100% {
    transform: translate3d(0, 6px, 0) rotate(-3deg);
  }
}

@keyframes lettuce-reverse {
  100% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  // 75% {
  //   transform: translate3d(0, 8px, 0) rotate(0);
  // }
  //
  // 50% {
  //   transform: translate3d(0, 6px, 0) rotate(0);
  // }
  //
  // 25% {
  //   transform: translate3d(0, 7px, 0) rotate(0);
  // }

  0% {
    transform: translate3d(0, 6px, 0) rotate(-3deg);
  }
}

@keyframes bun {
  0% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  25% {
    transform: translate3d(0, 10px, 0) rotate(1deg);
  }

  50% {
    transform: translate3d(0, 8px, 0) rotate(-1deg);
  }

  75% {
    transform: translate3d(0, 9px, 0) rotate(1deg);
  }

  100% {
    transform: translate3d(0, 8px, 0) rotate(-1deg);
  }
}

@keyframes bun-reverse {
  100% {
    transform: translate3d(0, 0, 0) rotate(0);
  }

  // 75% {
  //   transform: translate3d(0, 2px, 0) rotate(0);
  // }
  //
  // 50% {
  //   transform: translate3d(0, 5px, 0) rotate(0);
  // }
  //
  // 25% {
  //   transform: translate3d(0, 7px, 0) rotate(0);
  // }

  0% {
    transform: translate3d(0, 8px, 0) rotate(-1deg);
  }
}

.cheeseburger-button {
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  font: inherit;
  color: inherit;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  line-height: 0;
  padding: 3px 5px;
  outline: none;

  &:focus {
    outline: none;
  }

  .con {
    cursor: pointer;
    display: inline-block;
    width: auto;
    margin: 0 auto;
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    -ms-transition: all .25s ease;
    -o-transition: all .25s ease;
    transition: all .25s ease;

    .bar {
      display: block;
      height: 2px;
      width: 30px;
      background: black;
      margin: 2px auto;
      // -webkit-transition: all .25s ease;
      // -moz-transition: all .25s ease;
      // -ms-transition: all .25s ease;
      // -o-transition: all .25s ease;
      // transition: all .25s ease;

      &.bun {
        background: #EFB960;
        height: 4px;
        position: relative;
        z-index: 1;
      }

      &.bun:first-child {
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        animation: bun-reverse 0.5s ease-out forwards;
      }

      &.bun:last-child {
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      &.lettuce {
        background: #7EBB54;
        position: relative;
        z-index: 1;
        animation: lettuce-reverse 0.5s ease-out forwards;

        &:after {
          content: "";
          position: absolute;
          background: radial-gradient(ellipse, transparent, transparent 2px, #7EBB54 2px, #7EBB54 6px, transparent 0px);
          background-size: 11px 17px;
          width: 32px;
          height: 2px;
          top: 1px;
          left: -2px;
          background-position: 0px -32px;
        }
      }

      &.tomato {
        background: #C63543;
        animation: tomato-reverse 0.5s ease-out forwards;
      }

      &.cheese {
        background: #E4D14B;
        height: 1px;
        position: relative;
        margin-bottom: 0;
        position: relative;
        z-index: 1;
        animation: meat-reverse 0.5s ease-out forwards;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid #E4D14B;
          transform: rotate(180deg);
        }
      }

      &.meat {
        background: #754F40;
        height: 4px;
        margin-top: 0;
        animation: meat-reverse 0.5s ease-out forwards;
      }

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &.active {
    .con {
      .bar {
        &.bun:first-child {
          animation: bun 1.2s ease-out forwards;
        }

        &.lettuce {
          animation: lettuce 1.2s ease-out forwards;
        }

        &.tomato {
          animation: tomato 1.2s ease-out forwards;
        }

        &.cheese {
          animation: meat 1.2s ease-out forwards normal;
        }

        &.meat {
          animation: meat 1.2s ease-out forwards normal;
        }
      }
    }
  }
}

</style>
