<template>
    <button :disabled="disabled" class="zt-button"
            @click="handleClick"
            :autofocus="autofocus"
            :type="nativeType"
            :class="[
      type ? 'zt-button--' + type : '',
      size ? 'zt-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain
      }
    ]"
    >
        <i class="zt-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<style scoped>
    .zt-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #c4c4c4;
        color: #1f2d3d;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -moz-user-sztect: none;
        -webkit-user-sztect: none;
        -ms-user-sztect: none;
        padding: 10px 15px;
        font-size: 14px;
        border-radius: 4px
    }

    .zt-button + .zt-button {
        margin-left: 10px
    }

    .zt-button:focus, .zt-button:hover {
        color: #20a0ff;
        border-color: #20a0ff
    }

    .zt-button:active {
        color: #1d90e6;
        border-color: #1d90e6;
        outline: 0
    }

    .zt-button::-moz-focus-inner {
        border: 0
    }

    .zt-button [class*=zt-icon-] + span {
        margin-left: 5px
    }

    .zt-button.is-loading {
        position: rztative;
        pointer-events: none
    }

    .zt-button.is-loading:before {
        pointer-events: none;
        content: '';
        position: absolute;
        left: -1px;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: inherit;
        background-color: rgba(255, 255, 255, .35)
    }

    .zt-button.is-disabled, .zt-button.is-disabled:focus, .zt-button.is-disabled:hover {
        color: #bfcbd9;
        cursor: not-allowed;
        background-image: none;
        background-color: #eef1f6;
        border-color: #d1dbe5
    }

    .zt-button.is-disabled.zt-button--text {
        background-color: transparent
    }

    .zt-button.is-disabled.is-plain, .zt-button.is-disabled.is-plain:focus, .zt-button.is-disabled.is-plain:hover {
        background-color: #fff;
        border-color: #d1dbe5;
        color: #bfcbd9
    }

    .zt-button.is-active {
        color: #1d90e6;
        border-color: #1d90e6
    }

    .zt-button.is-plain:focus, .zt-button.is-plain:hover {
        background: #fff;
        border-color: #20a0ff;
        color: #20a0ff
    }

    .zt-button.is-plain:active {
        background: #fff;
        border-color: #1d90e6;
        color: #1d90e6;
        outline: 0
    }

    .zt-button--primary {
        color: #fff;
        background-color: #20a0ff;
        border-color: #20a0ff
    }

    .zt-button--primary:focus, .zt-button--primary:hover {
        background: #4db3ff;
        border-color: #4db3ff;
        color: #fff
    }

    .zt-button--primary.is-active, .zt-button--primary:active {
        background: #1d90e6;
        border-color: #1d90e6;
        color: #fff
    }

    .zt-button--primary:active {
        outline: 0
    }

    .zt-button--primary.is-plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d
    }

    .zt-button--primary.is-plain:focus, .zt-button--primary.is-plain:hover {
        background: #fff;
        border-color: #20a0ff;
        color: #20a0ff
    }

    .zt-button--primary.is-plain:active {
        background: #fff;
        border-color: #1d90e6;
        color: #1d90e6;
        outline: 0
    }

    .zt-button--success {
        color: #fff;
        background-color: #13ce66;
        border-color: #13ce66
    }

    .zt-button--success:focus, .zt-button--success:hover {
        background: #42d885;
        border-color: #42d885;
        color: #fff
    }

    .zt-button--success.is-active, .zt-button--success:active {
        background: #11b95c;
        border-color: #11b95c;
        color: #fff
    }

    .zt-button--success:active {
        outline: 0
    }

    .zt-button--success.is-plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d
    }

    .zt-button--success.is-plain:focus, .zt-button--success.is-plain:hover {
        background: #fff;
        border-color: #13ce66;
        color: #13ce66
    }

    .zt-button--success.is-plain:active {
        background: #fff;
        border-color: #11b95c;
        color: #11b95c;
        outline: 0
    }

    .zt-button--warning {
        color: #fff;
        background-color: #f7ba2a;
        border-color: #f7ba2a
    }

    .zt-button--warning:focus, .zt-button--warning:hover {
        background: #f9c855;
        border-color: #f9c855;
        color: #fff
    }

    .zt-button--warning.is-active, .zt-button--warning:active {
        background: #dea726;
        border-color: #dea726;
        color: #fff
    }

    .zt-button--warning:active {
        outline: 0
    }

    .zt-button--warning.is-plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d
    }

    .zt-button--warning.is-plain:focus, .zt-button--warning.is-plain:hover {
        background: #fff;
        border-color: #f7ba2a;
        color: #f7ba2a
    }

    .zt-button--warning.is-plain:active {
        background: #fff;
        border-color: #dea726;
        color: #dea726;
        outline: 0
    }

    .zt-button--danger {
        color: #fff;
        background-color: #ff4949;
        border-color: #ff4949
    }

    .zt-button--danger:focus, .zt-button--danger:hover {
        background: #ff6d6d;
        border-color: #ff6d6d;
        color: #fff
    }

    .zt-button--danger.is-active, .zt-button--danger:active {
        background: #e64242;
        border-color: #e64242;
        color: #fff
    }

    .zt-button--danger:active {
        outline: 0
    }

    .zt-button--danger.is-plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d
    }

    .zt-button--danger.is-plain:focus, .zt-button--danger.is-plain:hover {
        background: #fff;
        border-color: #ff4949;
        color: #ff4949
    }

    .zt-button--danger.is-plain:active {
        background: #fff;
        border-color: #e64242;
        color: #e64242;
        outline: 0
    }

    .zt-button--info {
        color: #fff;
        background-color: #50bfff;
        border-color: #50bfff
    }

    .zt-button--info:focus, .zt-button--info:hover {
        background: #73ccff;
        border-color: #73ccff;
        color: #fff
    }

    .zt-button--info.is-active, .zt-button--info:active {
        background: #48ace6;
        border-color: #48ace6;
        color: #fff
    }

    .zt-button--info:active {
        outline: 0
    }

    .zt-button--info.is-plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d
    }

    .zt-button--info.is-plain:focus, .zt-button--info.is-plain:hover {
        background: #fff;
        border-color: #50bfff;
        color: #50bfff
    }

    .zt-button--info.is-plain:active {
        background: #fff;
        border-color: #48ace6;
        color: #48ace6;
        outline: 0
    }

    .zt-button--large {
        padding: 11px 19px;
        font-size: 16px;
        border-radius: 4px
    }

    .zt-button--small {
        padding: 7px 9px;
        font-size: 12px;
        border-radius: 4px
    }

    .zt-button--mini {
        padding: 4px;
        font-size: 12px;
        border-radius: 4px
    }

    .zt-button--text {
        border: none;
        color: #20a0ff;
        background: 0 0;
        padding-left: 0;
        padding-right: 0
    }

    .zt-button--text:focus, .zt-button--text:hover {
        color: #4db3ff
    }

    .zt-button--text:active {
        color: #1d90e6
    }

    .zt-button-group {
        display: inline-block;
        vertical-align: middle
    }

    .zt-button-group:after, .zt-button-group:before {
        display: table;
        content: ""
    }

    .zt-button-group:after {
        clear: both
    }

    .zt-button-group .zt-button--primary:first-child {
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--primary:last-child {
        border-left-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--primary:not(:first-child):not(:last-child) {
        border-left-color: rgba(255, 255, 255, .5);
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--success:first-child {
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--success:last-child {
        border-left-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--success:not(:first-child):not(:last-child) {
        border-left-color: rgba(255, 255, 255, .5);
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--warning:first-child {
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--warning:last-child {
        border-left-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--warning:not(:first-child):not(:last-child) {
        border-left-color: rgba(255, 255, 255, .5);
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--danger:first-child {
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--danger:last-child {
        border-left-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--danger:not(:first-child):not(:last-child) {
        border-left-color: rgba(255, 255, 255, .5);
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--info:first-child {
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--info:last-child {
        border-left-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button--info:not(:first-child):not(:last-child) {
        border-left-color: rgba(255, 255, 255, .5);
        border-right-color: rgba(255, 255, 255, .5)
    }

    .zt-button-group .zt-button {
        float: left;
        position: rztative
    }

    .zt-button-group .zt-button + .zt-button {
        margin-left: 0
    }

    .zt-button-group .zt-button:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .zt-button-group .zt-button:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0
    }

    .zt-button-group .zt-button:not(:first-child):not(:last-child) {
        border-radius: 0
    }

    .zt-button-group .zt-button:not(:last-child) {
        margin-right: -1px
    }

    .zt-button-group .zt-button.is-active, .zt-button-group .zt-button:active, .zt-button-group .zt-button:focus, .zt-button-group .zt-button:hover {
        z-index: 1
    }
</style>
<script>
    export default {
        name: 'ZtButton',

        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            icon: {
                type: String,
                default: ''
            },
            nativeType: {
                type: String,
                default: 'button'
            },
            loading: Boolean,
            disabled: Boolean,
            plain: Boolean,
            autofocus: Boolean
        },

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };
</script>
