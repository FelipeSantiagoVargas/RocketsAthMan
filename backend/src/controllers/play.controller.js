import Play from "../models/Play";

// export const createPlay = async (req, res, next) => {

//     const { name, imgUrl, description } = req.body;
//     const newPlay = new Play({ name, imgUrl, description })
//     const playSaved = await newPlay.save()
//     return res.status(200).json(playSaved)

// }

export const getPlays = async (req, res) => {
    const plays = await Play.find();
    res.json(plays)
}

export const getPlayById = async (req, res) => {
    const play = await Play.findById(req.params.playId);
    res.status(200).json(play)
}

export const updatePlayById = async (req, res) => {
    const updatePlay = await Play.findByIdAndUpdate(req.params.playId, req.body,
        { new: true }
    );
    res.status(200).json(updatePlay)
}

export const deletePlayById = async (req, res) => {
    const { playId } = req.params;
    await Play.findByIdAndDelete(playId)
    res.status(204).json()
}
