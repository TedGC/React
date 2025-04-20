


async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        // const {title, image, address, description} = data; 




        client.close()

        res.status(201).json({message: 'meetup inserted'})
    }


}

export default handler;




