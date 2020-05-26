const enigma = require('enigma.js')
const schema = require('enigma.js/schemas/12.20.0.json')

let config = {
  host: "localhost", 
  isSecure: false, 
  port: 4848,
  prefix: "", 
  appId: "Canadian Wildfire Analysis_Story.qvf"  
}

const session = enigma.create({
  schema, 
  url: `ws${config.isSecure ? 's' : ''}://${config.host}:${config.port}/${config.prefix ? `${config.prefix}/` : ''}app/engineData`,
}) 

export async function openSession() {
  try {
    const qix = await session.open()
   try {
    return qix.openDoc(config.appId)
   } catch(error) {
     console.log('unable to open Doc', error)
   } 
  } catch (error){
    console.log('unable to open session', error)
  }
}

export function closeSession() {
  session.close()
}

