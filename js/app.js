
const LIST = [
    {
        id: 1,
        nome:'Mestre Yoda',
        avatar:'imagens/yoda.png'
    },
    {
        id: 2,
        nome:'Luke Skywalker',
        avatar:'imagens/luke.png'
    },
    {
        id: 3,
        nome:'Princesa Leia',
        avatar:'imagens/leia.png'
    },
    {
        id: 4,
        nome:'Han Solo',
        avatar:'imagens/hansolo.png'
    },
    {
        id: 5,
        nome:'Darth Vader',
        avatar:'imagens/vader.png'
    },
    {
        id: 6,
        nome:'Chewbacca',
        avatar:'imagens/chewbacca.png'
    },
    {
        id: 7,
        nome:'R2D2',
        avatar:'imagens/r2d2.png'
    },
    {
        id: 8,
        nome:'C3pO',
        avatar:'imagens/c3po.png'
    }
]
const App = new Vue({
    el:'#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Paulinho',
        characters: LIST
    }
})