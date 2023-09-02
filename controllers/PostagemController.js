import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
function PostagemController(app) {
    app.get('/noticias', exibir)
    function exibir(req, res) {
        (async () => {
            const db = await open({
                filename: './dados.db',
                driver: sqlite3.Database
            })
            const result = await db.all('SELECT * FROM noticias')
            res.send(result)
            // res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true})
            db.close()
        })()
    }
    // app.post('/noticias', inserir)
    // function inserir(req, res) {
    //     (async () => {
    //         const db = await open({
    //             filename: './dados.db',
    //             driver: sqlite3.Database
    //         })
    //         await db.run(`INSERT INTO noticias(titulo,conteudo, autor, image) 
    //         VALUES(?,?,?,?)`, req.body.titulo, req.body.conteudo, req.body.autor,req.body.image)
    //         res.send(`Tarefa: ${req.body.titulo} inserida com sucesso.`)
    //         db.close()
    //     })()
    // }
    // app.get('/noticias/id/:id', buscarTitulo)
    // function buscarTitulo(req, res) {
    //     (async () => {
    //         const db = await open({
    //             filename: './dados.db',
    //             driver: sqlite3.Database
    //         })
    //         const result = await db.all('SELECT * FROM noticias where id  like ?', req.params.id)
    //         if (result != '') {
    //             res.send(result)
    //         } else {
    //             res.send(`noticias com titulo: ${req.params.id} não encontrado`)
    //         }
    //         db.close()
    //     })()
    // }
    
    app.delete('/noticias/id/:id', deletarTitulo)
    function deletarTitulo(req, res) {
        (async () => {
            const db = await open({
                filename: './dados.db',
                driver: sqlite3.Database
            })
            const result = await db.all('SELECT * FROM noticias where id  like ?', req.params.id)
            if (result != '') {
                res.send(`noticias: ${req.params.id} deletada`)
                await db.run('DELETE from noticias WHERE id = ?', req.params.id)
            } else {
                res.send(`noticias: ${req.params.id} não encontrada`)
            }
            db.close()
        })()
    }
    // app.put('/noticias/id/:id', Atualizar)
    // function Atualizar(req, res) {
    //     (async () => {
    //         const db = await open({
    //             filename: './dados.db',
    //             driver: sqlite3.Database
    //         })
    //         const result = await db.all('SELECT * FROM noticias where id like ?', req.params.id)
    //         if (result != '') {
    //             res.send(`noticias: ${req.params.id} Atualizada`)
    //             await db.run('UPDATE noticias SET titulo=?, conteudo=?, autor=?, image=? WHERE id = ?', req.body.titulo, req.body.conteudo, req.body.autor,req.body.image,req.params.id)
    //         } else {
    //             res.send(`noticias: ${req.params.id} não encontrada`)
    //         }
    //         db.close()
    //     })() 
    // }
}
export default PostagemController