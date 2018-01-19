module.exports = {

    addContact: (req, res, next ) => {
        console.log(req.body)
        const dbInstance = req.app.get('db')
        let { name, email } = req.body
        console.log('req.nody', req.body)
        dbInstance.add_contact([ name, email ] )
            .then( response => res.status(200).send( response ))
    },

    getContact: (req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_contact()
            .then(( response ) => res.status(200).send( response ))
    }
}