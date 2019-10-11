const mult = (x, y) => { return x * y }

const storageCalc = new Vue({
  el: '#storageCalc',
  data: {
    items: 5,
    size: 3
  },
  computed: {
    storageCalc: function () {
      const i = parseInt(this.items)
      const j = parseInt(this.size)
      const warning = "The calculated value is an absolute value. Negatives are ignored."
      if(i < 0 || j < 0){
        return `Your total file size is ${Math.abs(mult(i, j))}kb.\n${warning}`
      }
      else{
        return `Your total file size is ${Math.abs(mult(i, j))}kb.`
      }
      
    }

  }
})