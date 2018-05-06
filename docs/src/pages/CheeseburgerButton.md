# Cheeseburger Button

A simple, accessible cheeseburger button component.

### Example

```html
<template>
  <cheeseburger-button :active="expanded" @update:active="value => expanded = value"/>
</template>
<script>
export default {
  data() {
    return {
      expanded: false
    }
  }
}
</script>
<!-- component-demo.vue -->
````

### Props

Name                 | Type       | Default      | Required | Description
----------------     | ---------- | ------------ | -------- | -----------------------
`active`             | Boolean    | false        | true     | Determines if the button is in the active state

### Events

Name                 | Params     | Description
----------------     | ---------- | -----------------------
`update:active`      | active     | Fired after the button is clicked, with new active state
