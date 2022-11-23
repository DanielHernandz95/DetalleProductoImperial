export const Contentful = () => {    
    
    const contentful = require("contentful")

const client = contentful.createClient({
  space:process.env.REACT_APP_SPACE_ID ,  
  environment: 'master', // defaults to 'master' if not set
  accessToken:process.env.REACT_APP_ACCESS_TOKEN
})

/*client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)*/
return client
}