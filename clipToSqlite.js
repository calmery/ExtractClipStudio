const fs = require( 'fs' )

const input  = 'sample.clip'
const output = 'sample.db'

const clip  = fs.readFileSync( input )
const index = clip.indexOf( 'SQLite format 3' )

if( index !== -1 ){
  let sqlite = clip.slice( index )
  fs.writeFileSync( output, sqlite )
}
