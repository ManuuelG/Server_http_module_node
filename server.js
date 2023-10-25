const http = require('http')

const fs = require('fs')

const server = http.createServer((request, response) => {
	const path = request.url

	console.log(path)

	if (path === '/index.html') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('Content-Type', 'text/html')
	
		// Prepara el body

		response.write(fs.readFileSync('./index.html', 'utf8', (err) => {
			if(err)
			console.log('ESTO NO VA')
		}))

		
		

		// Finaliza la respuesta
		response.end()



	} else if (path === '/style.css') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('Content-Type', 'text/css')

		// Prepara el body
		response.write(fs.readFileSync('./style.css', 'utf8', (err) => {
			if(err)
			console.log('ESTO NO VA')
		}))

		response.end()

	} else if (path === '/about.html') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('Content-Type', 'text/html')


		// Prepara el body
		response.write(fs.readFileSync('./about.html', 'utf8', (err) => {
			if(err)
			console.log('ESTO NO VA')
		}))

		response.end()

	} else if (path === '/contact.html') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('Content-Type', 'text/html')

		// Prepara el body
		response.write(fs.readFileSync('./contact.html', 'utf8', (err) => {
			if(err)
			console.log('ESTO NO VA')
		}))

		response.end()



	} else {
		response.statusCode = 404 // Establece el status code de respuesta
		response.setHeader('content-type', 'text/plain') // Establece cabeceras http de respuesta

		// Envia respuesta y Finaliza
		response.end('ERROR 404: NOT FOUND')
	}
})

server.listen(3000, () => console.log('Server on...'))
