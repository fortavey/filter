const app = new Vue({
  el: '.filter',
  data: {
    material: [
      {id: 1, name: 'Пластик',                    img: '../img/plastic.svg'},
      {id: 2, name: 'Стекло',                     img: '../img/glass.svg'},
      {id: 3, name: 'Бумага, Картон',             img: '../img/paper.svg'},
      {id: 4, name: 'Керамика, Фарфор',           img: '../img/ceramics.svg'},
      {id: 5, name: 'Текстиль',                   img: '../img/textil.svg'},
      {id: 6, name: 'Дерево',                     img: '../img/wood.svg'},
      {id: 7, name: 'Металл',                     img: '../img/metal.svg'},
      {id: 8, name: 'Оргапластик',                img: '../img/orgplastic.svg'},
      {id: 9, name: 'Камень, Мрамор',             img: '../img/stone.svg'},
      {id: 10, name: 'Кожа',                      img: '../img/skin.svg'},
      {id: 11, name: 'Термоустойчивый материал',  img: '../img/termo.svg'},
    ],
    products: [
      {name: 'Тампопечать',             img: '../img/tampo.png',          material: [1,2,3,4]},
      {name: 'Трафаретная печать',      img: '../img/trafaret.png',       material: [1,3,5,6]},
      {name: 'Термотрансфер',           img: '../img/termotransfer.png',  material: [5,11]},
      {name: 'Тиснение',                img: '../img/tisnenie.png',       material: [10]},
      {name: 'Ультрафиолетовая печать', img: '../img/ultrafiolet.png',    material: [1,3,6,7,8]},
      {name: 'Лазерная гравировка',     img: '../img/lazer.png',          material: [1,2,10,6,7,9]},
      {name: 'Текстильный принтер',     img: '../img/textile.png',        material: [5]},
      {name: 'Полимерная смола',        img: '../img/polimer.png',        material: [1,2,3]},
      {name: 'Деколь',                  img: '../img/dekol.png',          material: [2,4]},
      {name: 'Вышивка',                 img: '../img/vishivka.png',       material: [5]},
      {name: 'Шубер',                   img: '../img/shuber.png',         material: [3]},
      {name: 'Цифровая печать',         img: '../img/cifra.png',          material: [1,2,3,6,7]},
      {name: 'Сублимация',              img: '../img/sublimacia.png',     material: [2,4,5,7]},
      {name: 'Металлостикер',           img: '../img/menfllosticker.png', material: [1,3,10,6,7]},
    ],
    showMaterial: []
  },
  computed: {
    render(){
      return JSON.parse(JSON.stringify(this.products))
    }
  },
  methods: {
    getIcon(id){
      return this.material.find(el => el.id == id);
    },

    clickOnMaterial(id){
      this.addOrRemoveFromArray(id);
      this.render.splice(0, this.render.length);
      if(!this.showMaterial.length){
        this.render.push(...JSON.parse(JSON.stringify(this.products)));
        return;
      }
      const newArr = this.products.filter(product => {
        return this.showMaterial.some(id => product.material.includes(id));
      });
      this.render.push(...newArr);
    },

    addActiveClass(id){
      if(this.showMaterial.includes(id)) return 'active-btn';
    },

    addOrRemoveFromArray(id){
      if(this.showMaterial.includes(id)){
        this.showMaterial.splice(this.showMaterial.indexOf(id), 1);
      }else{
        this.showMaterial.push(id);
      }
    }
  },

});

