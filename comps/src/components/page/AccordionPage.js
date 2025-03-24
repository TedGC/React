import Accordion from "../compoents/Accordion";


function AccordionPage() {
    const items = [
        {
            id: 1023,
            label: 'what is the problem?',
            content: 'you can use this bro'
        },
        {
            id: 23130,
            label: 'nothing much',
            content: 'broah?'
        },
        {
            id: 'dfhlasdf',
            label: 'what is the problem?',
            content: 'brooooo'
        }

    ]



    return (
        <Accordion items={items} />
    )
}

export default AccordionPage;
