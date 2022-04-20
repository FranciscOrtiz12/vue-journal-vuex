export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // Nos revuelve un numero aleatorio basado en la fecha actual
            date: new Date().toDateString(), // sat 23, julio
            text: 'Sit non nisi sit magna aliquip irure. Anim ea in id aute consequat magna ea aliquip veniam minim irure nulla adipisicing. Ex veniam nisi incididunt irure eiusmod tempor. Eu adipisicing ad officia laborum anim ad sint consequat excepteur veniam. Enim voluptate ex quis nostrud exercitation velit velit reprehenderit dolore Lorem quis.',
            picture: null, // https://
        },
        {
            id: new Date().getTime() + 1000, // Nos revuelve un numero aleatorio basado en la fecha actual
            date: new Date().toDateString(), // sat 23, julio
            text: 'Dolor ea deserunt exercitation consequat. Ullamco voluptate amet eu culpa ut mollit ex nulla nulla ipsum dolore. Duis excepteur et elit nostrud qui aute occaecat. Aliquip reprehenderit nulla esse dolor do fugiat adipisicing.',
            picture: null, // https://
        },
        {
            id: new Date().getTime() + 2000, // Nos revuelve un numero aleatorio basado en la fecha actual
            date: new Date().toDateString(), // sat 23, julio
            text: 'Tempor aliquip consequat ullamco veniam ut labore non in cillum aliquip pariatur reprehenderit aute sit. Enim cillum consectetur do magna sint non dolor nisi sint id fugiat excepteur id. Ut mollit consectetur proident voluptate dolore deserunt non veniam et non eiusmod et commodo aliqua. Do aliqua pariatur adipisicing consequat eu ex est.',
            picture: null, // https://
        },
    ]
})