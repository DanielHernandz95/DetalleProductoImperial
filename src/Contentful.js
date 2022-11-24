export const Contentful = () => {    
    
    const contentful = require("contentful")

const client = contentful.createClient({
  //space:process.env.REACT_APP_SPACE_ID ,  
  space:"422j1j83iqpt",
  environment: 'master', // defaults to 'master' if not set
  //accessToken:process.env.REACT_APP_ACCESS_TOKEN
  accessToken:"31FdU4xP2lVgjrfvr-GPcfWmfVL1gfCma41t1S9FzrQ"
})

/*client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)*/
return client
}