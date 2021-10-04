import Play from "../models/Play";
import PlayBook from "../models/PlayBook";

export const createPlayBook = async (req, res, next) => {
    try {
        const { name, imgUrl, description } = req.body;
        const newPlayBook = new PlayBook({ name, imgUrl, description })
        const playBookSaved = await newPlayBook.save()
        return res.status(200).json(playBookSaved)
    } catch (error) {
        if (error.message.includes('E11000')&&error.message.includes('name')) {
            return res.json({message:'name playbook already exist'})
        }else if (error.message.includes('E11000')&&error.message.includes('imgUrl')) {
            return res.json({message:'image playbook already exist'})
        }
        console.log(error)
    }
}

export const getPlayBooks = async (req, res) => {
    const playBooks = await PlayBook.find();
    const plays = await Play.populate(playBooks, { path: 'plays' })
    res.json(plays)
}

export const getPlayBookById = async (req, res) => {
    const playBook = await PlayBook.findById(req.params.playBookId);
    const plays = await Play.populate(playBook, { path: 'plays' })
    res.status(200).json(plays)
}

export const updatePlayerById = async (req, res) => {
    const updatePlayBook = await PlayBook.findByIdAndUpdate(req.params.playBookId, req.body,
        { new: true }
    );
    res.status(200).json(updatePlayBook)
}

export const deletePlayBookById = async (req, res) => {
    const { playBookId } = req.params;
    await PlayBook.findByIdAndDelete(playBookId)
    res.status(200).json({message:'Playbook Deleted'})
}

export const addPlay = async (req, res) => {
    try {
        const { name, imgUrl, description } = req.body;
        const playBook = await PlayBook.findById(req.params.playBookId)
        const playsArray = Array.from(playBook.plays)
        const newPlay = new Play({ name, imgUrl, description })
        const playSaved = await newPlay.save()
        console.log(playsArray)
        playsArray.push(playSaved._id)
        console.log(playsArray)
        const updateplayBook = await PlayBook.findByIdAndUpdate(req.params.playBookId, { plays: playsArray },
            { new: true }
        );
        const plays = await Play.populate(updateplayBook, { path: 'plays' })
        return res.status(200).json(plays)
    } catch (error) {
        if (error.message.includes('E11000')&&error.message.includes('name')) {
            return res.json({message:'name play already exist'})
        }else if (error.message.includes('E11000')&&error.message.includes('imgUrl')) {
            return res.json({message:'image play already exist'})
        }
        console.log(error)
    }

}