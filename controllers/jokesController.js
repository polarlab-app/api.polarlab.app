const jokesController = {
    getJoke: (req, res) => {
        const type = req.query.type;
        if (type === 'regular') {
            res.send('Regular joke');
        } else if (type === 'dad') {
            res.send('Dad joke');
        } else {
            res.status(400).send('Invalid joke type');
        }
    },
};
module.exports = jokesController;
