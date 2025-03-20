function Accordion({ items }) {

    const redneredItems = items.map((item) => {
        return (
            <div key={item.id}>
                <div>{item.lable}</div>
                <div>{item.content}</div>
            </div>
        )
    })
    return (
        <div>
            {redneredItems}
        </div>
    )

}

export default Accordion