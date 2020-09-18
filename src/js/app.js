const app = new Vue({
  el: '.filter',
  data: {material: [], products: [], showMaterial: []},
  computed: {
    render(){ return JSON.parse(JSON.stringify(this.products)); }
  },
  methods: {
    getIcon(id){ return this.material.find(el => el.id == id); },

    clickOnMaterial(id){
      const arr = this.showMaterial;
      this.changeArray(id);
      this.render.splice(0, this.render.length);
      if(!arr.length){
        this.render.push(...JSON.parse(JSON.stringify(this.products))); return;
      }
      const newArr = this.products.filter(product => arr.some(id => product.material.includes(id)));
      this.render.push(...newArr);
    },

    addActiveClass(id){
      if(this.showMaterial.includes(id)) return 'active-btn';
    },

    changeArray(id){
      const arr = this.showMaterial;
      arr.includes(id) ? arr.splice(arr.indexOf(id), 1) : arr.push(id);
    }
  },
  beforeMount(){
    fetch(location.href + '/php/buttons.php')
    .then(response => response.json()).then(fullArr => { this.material.push(...fullArr[0]); this.products.push(...fullArr[1]); })
    .catch(err => console.log(err))
  }
});