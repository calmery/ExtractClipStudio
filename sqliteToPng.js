const sqlite3 = require( 'sqlite3' ).verbose()

const input  = 'sample.db'
const output = 'sample.png'

const db = new sqlite3.Database( input )

db.serialize( () => {
	db.all( 'select ImageData from CanvasPreview', ( error, rows ) => {
		require( 'fs' ).writeFileSync( output, rows[0].ImageData )
	} )
} )

db.close()
