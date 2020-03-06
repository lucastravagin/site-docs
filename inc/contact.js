var conn = require('./db')

module.exports = {
    render(req, res, success) {
        conn.query(`
      SELECT * FROM tb_convenios LIMIT 10
  `, (err, results) => {
                res.render('index', {
                    title: 'Docs Saúde - Sua clínica de saúde',
                    body: req.body,
                    convenios: results
                });
            })
    },

    save(fields) {
        console.log(fields)
        return new Promise((resolve, reject) => {
            conn.query(`
                INSERT into tb_contacts (name, telephone, email, subject, message)
                VALUES (?,?,?,?,?)
                `, [
                    fields.name,
                    fields.telephone,
                    fields.email,
                    fields.subject,
                    fields.message
                ],
                (err, results) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    },

    getContacts() {
        return new Promise((resolve, reject) => {

            conn.query(`
                Select * from tb_contacts ORDER BY register DESC
            `, (err, result) => {
                if(err) {
                    reject(err)
                }

                resolve(result)
            })
        })
    }
}
