

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //1231234
            date: new Date().toDateString(),
            text: 'Sit duis proident laborum Lorem aliquip culpa nostrud magna tempor magna.',
            pinture: null, // https://
        },
        {
            id: new Date().getTime() + 1000, //1231234
            date: new Date().toDateString(),
            text: 'Eu voluptate sunt ad ullamco duis mollit sit laborum voluptate.',
            pinture: null, // https://
        },
        {
            id: new Date().getTime() + 2000, //1231234
            date: new Date().toDateString(),
            text: 'Adipisicing nostrud ad esse aliquip labore labore amet irure ad ex nostrud ipsum aliquip proident.',
            pinture: null, // https://
        },
    ]
})